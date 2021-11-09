import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/e-commerce/services/auth.service';
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
  user: dataService.User;
  isLoading: boolean = true;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute,
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

  changeScreen(value) {
    this.screen = value;
  }

  async login() {
    let loginData = this.loginForm.value;
    this._authService.login(loginData.email, loginData.password).subscribe(
      async (_) => {
        this.loginForm.reset();
        this.getUser();
        window.location.reload();
      },
      (err) => {
        this._commonService.presentToast(err.message, 1500);
      }
    );
  }

  async register() {
    let registerData = this.loginForm.value;
    delete registerData['termsOfUse'];

    this._authService
      .register({ ...registerData })
      .then((res) => {
        this._commonService.presentToast(res['message'], 1500);
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
