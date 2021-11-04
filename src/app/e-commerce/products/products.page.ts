import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as dataService from '../services/bucket';
import { ModalController } from '@ionic/angular';
import { SpicaSortModalComponent } from '../../components/spica-sort-modal/spica-sort-modal.component';
import { SpicaFilterModalComponent } from 'src/app/components/spica-filter-modal/spica-filter-modal.component';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: dataService.E_Com_Product[] = [];
  filter: any = {};
  sort: any = {};
  promotionId: string;
  user: any;
  likedProducts: any = [];
  likedDataId: string;

  constructor(
    private route: ActivatedRoute,
    public modalController: ModalController,
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {
    dataService.initialize({ apikey: '5ks9718kiybw51i' });
  }

  ngOnInit() {
    this.promotionId = this.route.snapshot.params.promotionId;

    this.route.queryParams.subscribe((res) => {
      if (res.cat_id) {
        this.filter['category'] = res.cat_id;
      }
    });

    this.getData();
  }

  getData() {
    if (this.promotionId) {
      dataService.e_com_campaing_product
        .get(this.promotionId, {
          queryParams: { relation: true, sort: { ...this.sort } },
        })
        .then((res) => {
          this.products = res.product as dataService.E_Com_Product[];
        });
    } else {
      dataService.e_com_product
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

  async ionViewWillEnter() {
    if (!this.user) {
      this.user = await this.getActiveUser();
    } else {
      await this.getLikedData();
    }
  }

  async getActiveUser() {
    return this.authService.getUser().toPromise();
  }

  async getLikedData() {
    await dataService.e_com_liked_product
      .getAll({
        queryParams: { filter: { user: this.user._id }, relation: true },
      })
      .then((res) => {
        this.likedDataId = res[0]._id;
        if (res[0].product.length) {
          this.likedProducts = res[0].product.map((el) => {
            return el['_id'];
          });
        }
      });
  }

  ionViewWillLeave() {
    this.promotionId = undefined;
  }

  async presentSortModal() {
    const sortModal = await this.modalController.create({
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

    const filterModal = await this.modalController.create({
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
      if (!res.data || !res.data.filter.length) {
        return;
      }

      res.data.filter.forEach((el) => {
        if (el.name == 'price_range') {
        } else {
          this.filter[el.name] = { $in: el.value };
        }
      });
    });

    return await filterModal.present();
  }

  likeChanged(value, id) {
    if (!this.authService.getActiveToken()) {
      this.router.navigate(['e-commerce/tabs/profile']);
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

  async getAttributes() {
    return dataService.e_com_attribute.getAll();
  }
}
