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

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    dataService.initialize({ apikey: '5ks9718kiybw51i' });
  }

  async ngOnInit() {
    this.user = await this.getActiveUser()
    await this.getLikedData()
  }

  async ionViewWillEnter() {
    // if (!this.user) {
    //   this.user = await this.getActiveUser()
    //   if(!this.user){
    //     this.router.navigate(['e-commerce/tabs/profile'])
    //   }
    // } else {
      // await this.getLikedData()
    // }
  }

  async getActiveUser() {
    return this.authService.getUser().toPromise();
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
        this.isLoading = false;
      });
  }

  likeChanged(id) {
    if (!this.authService.getActiveToken()) {
      this.router.navigate(['e-commerce/tabs/profile']);
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
