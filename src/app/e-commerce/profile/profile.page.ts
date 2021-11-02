import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/e-commerce/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import * as dataService from '../services/bucket';
import { environment } from '../services/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  screen: string = 'login';
  loginForm: FormGroup;
  continueWithoutLogin: boolean = false;
  user: dataService.E_Com_User;
  isLoading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
  ) {
    dataService.initialize({ apikey: environment.apikey });
    this.loginForm = this.formBuilder.group({
      email: '',
      name: '',
      surname: '',
      password: '',
      termsOfUse: '',
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.getActiveToken()) {
      this.getUser();
    } else {
      this.isLoading = false;
    }

    this.route.queryParams.subscribe((res) => {
      if (res.from_basket) {
        this.continueWithoutLogin = true;
      }
    });
    this.router.navigate([]);
  }

  getUser() {
    this.authService.getUser().subscribe((user) => {
      this.user = user;
      this.isLoading = false;
    });
  }

  ionViewWillLeave() {
    this.continueWithoutLogin = false;
  }

  changeScreen(value) {
    this.screen = value;
  }

  async login() {
    let loginData = this.loginForm.value;
    this.authService.login(loginData.email, loginData.password).subscribe(
      (_) => {
        this.loginForm.reset();
        this.getUser();
      },
      (err) => {
        this.commonService.presentToast(err.message, 1500);
      }
    );
  }

  async register() {
    let value = this.loginForm.value;
    // this.authService.register({})
  }

  logout() {
    this.user = undefined;
    this.authService.logout();
  }

  navigateToBasket() {
    this.router.navigate(['/e-commerce/tabs/basket'], {
      queryParams: { type: 'confirm_basket' },
    });
  }
}
