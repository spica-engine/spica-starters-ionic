import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../services/auth.service';
import * as dataService from '../services/bucket';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  slideOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  recommendedslideOpts = {
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  allDetail: boolean = false;

  recommendedProducts: dataService.E_Com_Product[] = [];

  productId: string;
  product: any;
  likedProducts: string[] = [];
  likedDataId: string;

  basketItemCount: number = 0;
  selectedAttribute = {};
  disableAddToBasket: boolean = true;
  user: dataService.E_Com_User;
  basket: dataService.E_Com_Basket;

  constructor(
    private _commonService: CommonService,
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.productId = this._route.snapshot.params.productId;
    this.basketItemCount = this.basket?.product.length;

    this.user = await this.getActiveUser();
    if (this.user) {
      this.basket = await this.getBasketData();
      await this.getLikedData();
    }

    dataService.e_com_product
      .get(this.productId, { queryParams: { relation: true } })
      .then((res) => {
        this.product = res;
        if (!this.product.gallery) {
          this.product.gallery = [];
        }
        this.product.gallery.unshift(this.product.cover_image);

        let isLiked = this.likedProducts.find((el) => {
          return el == this.product._id;
        });

        if (isLiked) {
          this.product['is_liked'] = true;
        }
      })
      .catch((err) => console.log(err));

    this.getRecommendedProducts();
  }

  async getActiveUser() {
    return this._authService.getUser().toPromise();
  }

  async getBasketData() {
    const data = dataService.e_com_basket.getAll({
      queryParams: {
        filter: { user: this.user._id, is_completed: false },
        relation: true,
      },
    });
    return data[0];
  }

  async getRecommendedProducts() {
    return dataService.e_com_product
      .getAll({
        queryParams: { limit: 10, relation: true, filter: {is_available: true} },
      })
      .then((res) => {
        this.recommendedProducts = res;
        if (this.likedProducts.length) {
          this.likedProducts.forEach((id) => {
            this.recommendedProducts.map((el) => {
              if (el._id == id) {
                return (el['is_liked'] = true);
              }
            });
          });
        }
      });
  }

  async getLikedData() {
    await dataService.e_com_liked_product
      .getAll({
        queryParams: { filter: { user: this.user._id }, relation: true },
      })
      .then((res) => {
        if (res[0]) {
          this.likedDataId = res[0]._id;
          if (res[0].product.length) {
            this.likedProducts = res[0].product.map((el) => {
              return el['_id'];
            });
          }
        }
      });
  }

  seletAttribute(key, value) {
    this.selectedAttribute[key] = value;

    if (
      Object.keys(this.selectedAttribute).length ==
      this.product.attribute.length
    ) {
      this.disableAddToBasket = false;
    }
  }

  likeChanged(value, id) {
    if (value) {
      this.likedProducts.push(id);
    } else {
      this.likedProducts.forEach((el) => {
        if (el == id) {
          this.likedProducts = this.likedProducts.filter((product) => {
            return product !== id;
          });
        }
      });
    }

    if (this.likedDataId) {
      dataService.e_com_liked_product.patch({
        product: this.likedProducts,
        _id: this.likedDataId,
      });
    } else {
      dataService.e_com_liked_product
        .insert({
          product: this.likedProducts,
          user: this.user._id,
        })
        .then((res) => {
          this.likedDataId = res._id;
        });
    }
  }

  async addToBasket() {
    if (!this.user) {
      this._router.navigate(['e-commerce/tabs/profile']);
      return;
    }
    this._commonService.presentToast('Product added to basket', 800);

    this.product['selected_attribute'] = this.selectedAttribute;
    this.product['quantity'] = 1;

    let exists = false;

    if (this.basket) {
      this.basket.product.forEach((el) => {
        if (el['_id'] == this.product._id) {
          el['quantity'] += 1;
          exists = true;
        }
      });

      if (!exists) {
        this.basket.product.push(this.product);
      }

      this.basket.metadata = this.prepareMetadata(this.basket.product);

      dataService.e_com_basket.patch({
        product: this.basket.product,
        metadata: this.basket.metadata,
        _id: this.basket._id,
      });
    } else {
      let data = {
        product: [this.product],
        user: this.user._id,
        title: 'Basket',
      };

      data['metadata'] = this.prepareMetadata(data.product);

      await dataService.e_com_basket.insert(data).then((res) => {
        this.basket = res;
      });
    }

    this.basketItemCount = this.basket.product.length;
  }

  prepareMetadata(basketData) {
    const metadata = [];
    for (let data of basketData) {
      let obj = {
        product_id: data._id,
        quantity: data.quantity,
        selected_attribute: JSON.stringify(data.selected_attribute),
      };

      metadata.push(obj);
    }
    return metadata;
  }
}
