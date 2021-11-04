import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/e-commerce/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import * as dataService from '../services/bucket';
import { environment } from '../services/environment';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  screen: string = 'login';
  loginForm: FormGroup;
  user: dataService.E_Com_User;
  isLoading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private storageService: StorageService
  ) {
    dataService.initialize({ apikey: environment.apikey });
    this.loginForm = this.formBuilder.group({
      email: 'idriscumali@gmail.com',
      name: '',
      surname: '',
      password: '123456',
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

  changeScreen(value) {
    this.screen = value;
  }

  async login() {
    let loginData = this.loginForm.value;
    this.authService.login(loginData.email, loginData.password).subscribe(
      async (_) => {
        this.loginForm.reset();
        this.getUser();
      },
      (err) => {
        this.commonService.presentToast(err.message, 1500);
      }
    );
  }

  async register() {
    let registerData = this.loginForm.value;
    delete registerData['termsOfUse'];

    this.authService
      .register({ ...registerData })
      .then((res) => {
        this.commonService.presentToast(res['message'], 1500);
      })
      .catch((err) => {
        this.commonService.presentToast(err.error.message, 1500);
      });
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
