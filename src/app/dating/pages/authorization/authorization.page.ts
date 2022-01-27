import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { AuthService } from '../../services/auth.service';
import { User, user } from '../../services/bucket';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.page.html',
  styleUrls: ['./authorization.page.scss'],
})
export class AuthorizationPage implements OnInit {
  isLoading: boolean = false;
  user: User;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _commonService: CommonService,
    private _pushNotificationSerivce: PushNotificationService
  ) {}

  ngOnInit() {}

  async login(loginData) {
    this.isLoading = true;
    this._authService
      .login(loginData.email, loginData.password)
      .toPromise()
      .then(async (res) => {
        this.user = res;
        const fcmToken = this._pushNotificationSerivce.getFCMToken();
        this.updateFcmToken(fcmToken);

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

  nvigateToHome() {
    this._router.navigate(['/dating/tabs/profile']);
  }

  updateFcmToken(fcm_token) {
    user
      .patch({ _id: this.user._id, fcm_token: fcm_token })
      .catch((err) => {
        console.log(err);
      });
  }
}
