import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import * as dataService from '../../services/bucket';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.page.html',
  styleUrls: ['./authorization.page.scss'],
})
export class AuthorizationPage implements OnInit {
  user: dataService.Music_User;
  isLoading: boolean = false;
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _commonService: CommonService
  ) {
    this._authService.initBucket();
  }

  ngOnInit() {}

  login(loginData) {
    this.isLoading = true;
    this._authService
      .login(loginData.email, loginData.password)
      .toPromise()
      .then((res) => {
        this.isLoading = false;
        this._router.navigate(['/music-streaming/tabs/home']);
      })
      .catch((err) => {
        this.isLoading = false;
        this._commonService.presentToast(err.message, 1500)
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
