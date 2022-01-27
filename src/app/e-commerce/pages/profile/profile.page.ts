import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../services/auth.service';
import * as dataService from '../../services/bucket';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: dataService.User;
  isLoading: boolean = true;
  listItems: Item[] = [];
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _commonService: CommonService
  ) {
    this._authService.initBucket();
  }

  ngOnInit() {}

  ionViewWillEnter() {
    if (this._authService.getActiveToken()) {
      this.getUser();
    } else {
      this.isLoading = false;
    }
  }

  getUser() {
    this._authService
      .getUser()
      .toPromise()
      .then((user) => {
        this.user = user;
        this.isLoading = false;
        this.listItems = [
          { key: 'name', value: '', seperate: true },
          { key: 'surname', value: '', seperate: true },
          { key: 'email', value: '', seperate: true },
        ];
        this.listItems.forEach(
          (item) =>
            (item.value = this.user[item.key] ? this.user[item.key] : '')
        );
        // this.listItems = this.listItems.concat([
        //   {
        //     key: 'order',
        //     value: 'Orders',
        //     seperate: false,
        //     link: '',
        //   },
        //   {
        //     key: 'addresses',
        //     value: 'Addresses',
        //     seperate: false,
        //     link: '',
        //   },
        // ]);
      });
  }

  async login(loginData) {
    this.isLoading = true;
    this._authService
      .login(loginData.email, loginData.password)
      .toPromise()
      .then(
        async (_) => {
          this.getUser();
          this._commonService.presentToast('Login Successful !', 1500);
        },
        (err) => {
          this._commonService.presentToast(err.message, 1500);
        }
      );
  }

  async register(registerData) {
    this._authService
      .register({ ...registerData })
      .then((res) => {
        this._commonService.presentToast(res['message'], 1500);
        this.login(registerData);
      })
      .catch((err) => {
        this._commonService.presentToast(err.error.message, 1500);
      });
  }

  logout() {
    this.isLoading = true;
    this.user = undefined;
    this._authService.logout();
  }

  navigateToBasket() {
    this._router.navigate(['/e-commerce/tabs/basket'], {
      queryParams: { type: 'confirm_basket' },
    });
  }
}
