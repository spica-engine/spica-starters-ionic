import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dataService from '../services/bucket';
import { ModalController } from '@ionic/angular';
import { SpicaSortModalComponent } from '../../components/spica-sort-modal/spica-sort-modal.component';
import { SpicaFilterModalComponent } from 'src/app/components/spica-filter-modal/spica-filter-modal.component';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: dataService.E_Com_Product[] = [];
  filter: any = {};
  sort: any = {};
  likedProducts: dataService.E_Com_Liked_Product[] = [];
  promotionId: string;

  constructor(
    private route: ActivatedRoute,
    public modalController: ModalController,
    private storageService: StorageService
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
          this.likedProducts =
            this.storageService.getLocalStorageParsedData('liked_products');

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

  ionViewWillEnter() {
    // let likedData = localStorage.getItem('liked_products');
    // if (likedData) {
    //   this.likedProducts = JSON.parse(likedData);
    //   this.likedProducts.forEach((id) => {
    //     this.products.map(el => {
    //       console.log("MAP", el)
    //       if(el._id == id){
    //         console.log("IF", el)
    //         return el['is_liked'] = true;
    //       }
    //     })
    //   });
    // }
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
    this.likedProducts =
      this.storageService.getLocalStorageParsedData('liked_products');

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

    this.storageService.setLocalStorageStringifyData(
      'liked_products',
      this.likedProducts
    );
  }

  async getAttributes() {
    return dataService.e_com_attribute.getAll();
  }
}
