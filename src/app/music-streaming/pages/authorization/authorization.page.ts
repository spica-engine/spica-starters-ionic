import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  screen: string = 'login';
  loginForm: FormGroup;
  user: dataService.Music_User;
  isLoading: boolean = true;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _commonService: CommonService
  ) {
    this._authService.initBucket();

    this.loginForm = this._formBuilder.group({
      email: '',
      name: '',
      surname: '',
      password: '',
      termsOfUse: '',
    });
  }

  ngOnInit() {}

  login(loginData) {
    this._authService
      .login(loginData.email, loginData.password)
      .toPromise()
      .then((res) => {
        this._router.navigate(['/music-streaming/tabs/home']);
      })
      .catch((err) => this._commonService.presentToast(err.message, 1500));
  }

  register(registerData) {
    delete registerData['termsOfUse'];

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
        this._commonService.presentToast(err.error.message, 1500);
      });
  }

  // logout() {
  //   this.user = undefined;
  //   this._authService.logout();
  //   window.location.reload();
  // }
}
