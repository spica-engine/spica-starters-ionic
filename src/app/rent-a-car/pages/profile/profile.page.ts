import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isLoading: boolean = true;
  listItems: Item[] = [];
  user: DataService.User;
  me: DataService.User;
  loginForm: FormGroup;


  constructor(private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _commonService: CommonService) {
  }

  async ngOnInit() {
    this.me = await this._authService.getUser().toPromise();
    this.user = this.me;
    this.isLoading = false;
    this.listItems = [
      { key: 'name', value: '', seperate: true },
      { key: 'surname', value: '', seperate: true },
    ];
    this.listItems.forEach(
      (item) => (item.value = this.user[item.key] ? this.user[item.key] : '')
    );
    if (this.user._id == this.me._id) {
      this.listItems = this.listItems.concat([
        {
          key: 'user-rents',
          value: 'All Rents',
          seperate: false,
          link: '../user-rents/' + this.user._id,
        },
      ]);
    }
    this.isLoading = false;
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
  nvigateToHome() {
    this._router.navigateByUrl('/rent-a-car/home', {
      replaceUrl: true,
    });
  }
  logout() {
    this.isLoading = true;
    this._authService.logout();
  }
}
