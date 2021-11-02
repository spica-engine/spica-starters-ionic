import { Component, OnInit } from '@angular/core';
import * as dataService from '../services/bucket';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  likedProducts: any = [];
  isLoading: boolean = true;

  constructor() {
    dataService.initialize({ apikey: '5ks9718kiybw51i' });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    let likedData = localStorage.getItem('liked_products');

    if (likedData) {
      likedData = JSON.parse(likedData);

      dataService.e_com_product
        .getAll({
          queryParams: {
            filter: {
              _id: { $in: likedData },
            },
          },
        })
        .then((res) => {
          this.likedProducts = res;
          this.likedProducts.forEach((el) => {
            el['is_liked'] = true;
          });
          this.isLoading = false;
        })
        .catch((_) => (this.isLoading = false));
    }
  }

  likeChanged(value, id) {
    let storageData = localStorage.getItem('liked_products');

    if (storageData) {
      let likedData = JSON.parse(storageData);

      likedData.forEach((el) => {
        if (el == id) {
          likedData = likedData.filter((product) => {
            return product !== id;
          });
        }
      });

      localStorage.setItem('liked_products', JSON.stringify(likedData));

      this.likedProducts = this.likedProducts.filter((el) => {
        return el._id !== id;
      });
    }
  }
}
