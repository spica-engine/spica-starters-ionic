import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.page.html',
  styleUrls: ['./authorization.page.scss'],
})
export class AuthorizationPage implements OnInit {
  user: DataService.User;
  isLoading: boolean = false;
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _commonService: CommonService
  ) {
    this._authService.initBucket();
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.isLoading = true;
    let user = await this._authService.getUser().toPromise();
    this.isLoading = false;
    if (user) {
      this.nvigateToHome();
    }
  }

  nvigateToHome() {
    this._router.navigateByUrl('/music-streaming/tabs/home', {
      replaceUrl: true,
    });
  }

  login(loginData) {
    this.isLoading = true;
    this._authService
      .login(loginData.email, loginData.password)
      .toPromise()
      .then((res) => {
        this.isLoading = false;
        this.nvigateToHome();
      })
      .catch((err) => {
        this.isLoading = false;
        this._commonService.presentToast(err.message, 1500);
      });
  }

  register(registerData) {
    this.isLoading = true;
    this._authService
      .register({ ...registerData })
      .then((res) => {
        this._commonService.presentToast(res['message'], 1500);
        this.login({
          email: registerData.email,
          password: registerData.password,
        });
      })
      .catch((err) => {
        this.isLoading = false;
        this._commonService.presentToast(err.error.message, 1500);
      });
  }
}
