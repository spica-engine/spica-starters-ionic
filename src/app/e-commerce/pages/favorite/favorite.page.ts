import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as dataService from '../../services/bucket';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage {
  likedProducts: any = [];
  likedDataId: string;
  isLoading: boolean = true;
  user: dataService.User;

  constructor(private _authService: AuthService, private _router: Router) {
    this._authService.initBucket();
  }

  async ionViewWillEnter() {
    this.user = await this.getActiveUser();
    if (this.user) {
      await this.getLikedData();
    }
    this.isLoading = false;
  }

  async getActiveUser() {
    return this._authService.getUser().toPromise();
  }

  async getLikedData() {
    return dataService.liked_product
      .getAll({
        queryParams: { filter: { user: this.user._id }, relation: true },
      })
      .then((res) => {
        if(res.length){
          this.likedDataId = res[0]._id;
          this.likedProducts = res[0].products;
          this.likedProducts.forEach((el) => {
            el['is_liked'] = true;
          });
        }
      });
  }

  likeChanged(id) {
    if (!this._authService.getActiveToken()) {
      this._router.navigate(['e-commerce/tabs/profile']);
      return;
    }

    this.likedProducts = this.likedProducts.filter((el) => {
      return el._id !== id;
    });

    dataService.liked_product.patch({
      products: this.likedProducts,
      _id: this.likedDataId,
    });
  }
}
