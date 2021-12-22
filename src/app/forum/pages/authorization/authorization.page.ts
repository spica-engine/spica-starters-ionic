import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.page.html',
  styleUrls: ['./authorization.page.scss'],
})
export class AuthorizationPage implements OnInit {
  screen: string = 'login';
  loginForm: FormGroup;
  user: DataService.User;
  isLoading: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _commonService: CommonService
  ) {
    this._authService.initBucket();

    this.loginForm = this._formBuilder.group({
      email: '',
      password: '',
      termsOfUse: '',
    });
  }

  ngOnInit() {}

  login(loginData) {
    this.isLoading = true;
    this._authService
      .login(loginData.email, loginData.password)
      .toPromise()
      .then(() => {
        this.isLoading = false;
        this._authService.initBucket();
        this._router.navigate(['/forum'], { replaceUrl: true });
      })
      .catch((err) => {
        this.isLoading = false;
        this._commonService.presentToast(err.message, 1500);
      });
  }

  register(registerData) {
    this.isLoading = true;
    delete registerData['termsOfUse'];

    this._authService
      .register({ ...registerData })
      .then((res) => {
        this.isLoading = false;
        this.login(registerData);
        this._commonService.presentToast(res['message'], 1500);
      })
      .catch((err) => {
        this.isLoading = false;
        this._commonService.presentToast(err.error.message, 1500);
      });
  }

  clickMenuItem(event) {
    if (event == '/') {
      this._router.navigateByUrl(`/forum/${event}`, { replaceUrl: true });
    }
  }
}
