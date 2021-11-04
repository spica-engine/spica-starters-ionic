import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as dataService from '../services/bucket';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  likedProducts: any = [];
  likedDataId: string;
  isLoading: boolean = true;
  user: dataService.E_Com_User;

  constructor(private _authService: AuthService, private _router: Router) {
    this._authService.initBucket();
  }

  async ngOnInit() {
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
    return dataService.e_com_liked_product
      .getAll({
        queryParams: { filter: { user: this.user._id }, relation: true },
      })
      .then((res) => {
        this.likedDataId = res[0]._id;
        this.likedProducts = res[0].product;
        this.likedProducts.forEach((el) => {
          el['is_liked'] = true;
        });
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

    dataService.e_com_liked_product.patch({
      product: this.likedProducts,
      _id: this.likedDataId,
    });
  }
}
