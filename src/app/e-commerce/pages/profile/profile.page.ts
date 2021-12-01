import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../services/auth.service';
import * as dataService from '../services/bucket';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: dataService.E_Com_User;
  isLoading: boolean = true;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute,
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

    this._route.queryParams.subscribe((res) => {
      if (res.from_basket) {
      }
    });
    this._router.navigate([]);
  }

  getUser() {
    this._authService.getUser().subscribe((user) => {
      this.user = user;
      this.isLoading = false;
    });
  }

  async login(loginData) {
    this._authService.login(loginData.email, loginData.password).subscribe(
      async (_) => {
        this.getUser();
        window.location.reload();
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
    this.user = undefined;
    this._authService.logout();
    window.location.reload();
  }

  navigateToBasket() {
    this._router.navigate(['/e-commerce/tabs/basket'], {
      queryParams: { type: 'confirm_basket' },
    });
  }
}
