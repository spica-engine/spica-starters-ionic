import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../services/auth.service';
import * as dataService from '../services/bucket';
import { StorageService } from '../services/storage.service';

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

  recommendedProducts = [
    {
      _id: '1',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
    {
      _id: '2',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
    {
      _id: '3',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
    {
      _id: '4',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
    {
      _id: '5',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
    {
      _id: '6',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
  ];

  productId: string;
  product: any;

  basketItemCount: number = 0;
  selectedAttribute = { Size: '39', Color: 'red' };

  user: dataService.E_Com_User;
  basket: dataService.E_Com_Basket;

  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {
    dataService.initialize({ apikey: '5ks9718kiybw51i' });
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params.productId;

    this.basketItemCount = this.basket?.product.length;

    dataService.e_com_product
      .get(this.productId, { queryParams: { relation: true } })
      .then((res) => {
        this.product = res;
        if (!this.product.gallery) {
          this.product.gallery = [];
        }
        this.product.gallery.unshift(this.product.cover_image);
      })
      .catch((err) => console.log(err));
  }

  async ionViewWillEnter() {
    if (!this.user) {
      this.user = await this.getActiveUser();
    }

    if (this.user) {
      this.basket = await this.getBasketData();
    }
  }

  async getActiveUser() {
    return this.authService.getUser().toPromise();
  }

  async getBasketData() {
    const data = dataService.e_com_basket.getAll({
      queryParams: { filter: { user: this.user._id, is_completed: false },relation: true },
    });
    return data[0];
  }

  likeChanged(value, id) {
    // if (this.product._id == id) {
    //   this.product.is_liked = !this.product.is_liked;
    // }
  }

  async addToBasket() {
    if (!this.user) {
      this.router.navigate(['e-commerce/tabs/profile']);
      return;
    }
    // if(this.product.attribute.length != Object.keys(this.selectedAttribute).length){
    // !TODO
    // }
    this.commonService.presentToast('Product added to basket', 800);

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
