import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as dataService from '../../services/bucket';
import { ModalController } from '@ionic/angular';
import { SpicaSortModalComponent } from '../../../components/spica-sort-modal/spica-sort-modal.component';
import { SpicaFilterModalComponent } from 'src/app/components/spica-filter-modal/spica-filter-modal.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: dataService.Product[] = [];
  filter: any = { is_available: true };
  sort: any = {};
  promotionId: string;
  user: any;
  likedProducts: string[] = [];
  likedDataId: string;

  constructor(
    private _route: ActivatedRoute,
    private _modalController: ModalController,
    private _authService: AuthService,
    private _router: Router
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.promotionId = this._route.snapshot.params.promotionId;

    this._route.queryParams.subscribe((res) => {
      if (res.cat_id) {
        this.filter['categories'] = res.cat_id;
      }
    });

    this.user = await this.getActiveUser();

    if (this.user) {
      await this.getLikedData();
    }

    this.getData();
  }

  getData() {
    if (this.promotionId) {
      dataService.campaign_product
        .get(this.promotionId, {
          queryParams: { relation: true, sort: { ...this.sort } },
        })
        .then((res) => {
          this.products = res.products as dataService.Product[];
        });
    } else {
      dataService.product
        .getAll({
          queryParams: { filter: { ...this.filter }, sort: { ...this.sort } },
        })
        .then((res) => {
          this.products = res;

          if (this.likedProducts.length) {
            this.likedProducts.forEach((id) => {
              this.products.map((el) => {
                if (el._id == id) {
                  return (el['is_liked'] = true);
                }
              });
            });
          }
        });
    }
  }

  async getActiveUser() {
    return this._authService.getUser().toPromise();
  }

  async getLikedData() {
    await dataService.liked_product
      .getAll({
        queryParams: { filter: { user: this.user._id }, relation: true },
      })
      .then((res) => {
        if(res.length){
          this.likedDataId = res[0]._id;
          if (res[0].products.length) {
            this.likedProducts = res[0].products.map((el) => {
              return el['_id'];
            });
          }
        }
      });
  }

  ionViewWillLeave() {
    this.promotionId = undefined;
  }

  async presentSortModal() {
    const sortModal = await this._modalController.create({
      component: SpicaSortModalComponent,
      cssClass: 'spica-sort-modal-style',
      swipeToClose: true,
      componentProps: {
        items: [
          { title: 'Highest Price', key: 'highest_price' },
          { title: 'Lowest Price', key: 'lower_price' },
          { title: 'Latest Products', key: 'latest_products' },
          { title: 'Oldest Products', key: 'oldest_products' },
        ],
      },
    });

    sortModal.onWillDismiss().then((res) => {
      if (!res.data) {
        return;
      }

      if (res.data.sort_key == 'highest_price') {
        this.sort = { normal_price: -1 };
      } else if (res.data.sort_key == 'lower_price') {
        this.sort = { normal_price: 1 };
      } else if (res.data.sort_key == 'latest_products') {
        this.sort = { created_at: -1 };
      } else if (res.data.sort_key == 'oldest_products') {
        this.sort = { created_at: 1 };
      } else {
        this.sort = {};
      }

      this.getData();
    });

    return await sortModal.present();
  }

  async presentFilterModal() {
    const attributes = await this.getAttributes();

    const filterModal = await this._modalController.create({
      component: SpicaFilterModalComponent,
      cssClass: 'spica-filter-modal-style',
      swipeToClose: true,
      componentProps: {
        attributes: attributes,
        price_range: { lower: 10, upper: 100 },
        currency: 'USD',
      },
    });

    filterModal.onWillDismiss().then((res) => {
      if (!res.data) {
        return;
      }

      if (res.data.filter?.length) {
        res.data.filter.forEach((el) => {
          if (el.name == 'price_range') {
            console.log(el);
            this.filter['discounted_price'] = {
              $gte: el.value.lower,
              $lte: el.value.upper,
            };
          } else {
            this.filter[el.name] = { $in: el.value };
          }
        });
      }

      if (res.data.action == 'clear_filter' && attributes.length) {
        attributes.forEach((el) => {
          delete this.filter[el.name];
        });
        delete this.filter['discounted_price'];
      }

      this.getData();
    });

    return await filterModal.present();
  }

  likeChanged(value, id) {
    if (!this._authService.getActiveToken()) {
      this._router.navigate(['e-commerce/tabs/profile']);
      return;
    }

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
      dataService.liked_product.patch({
        products: this.likedProducts,
        _id: this.likedDataId,
      });
    } else {
      dataService.liked_product
        .insert({
          products: this.likedProducts,
          user: this.user._id,
        })
        .then((res) => {
          this.likedDataId = res._id;
        });
    }
  }

  async getAttributes() {
    return dataService.attribute.getAll();
  }
}
