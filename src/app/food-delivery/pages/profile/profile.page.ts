import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../services/bucket';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  user: User;
  listItems: Item[] = [];
  isLoading: boolean = false;
  constructor(
    private _authService: AuthService,
    private _commonService: CommonService,
    private _router: Router,
  ) { }

  async ionViewWillEnter() {
    this.isLoading = true;
    this.user = await this._authService.getUser().toPromise();

    if(this.user){
      this.listItems = [
        { key: 'username', value: '', seperate: true },
        { key: 'name', value: '', seperate: true },
        { key: 'surname', value: '', seperate: true },
      ];
      this.listItems.forEach(
        (item) => (item.value = this.user[item.key] ? this.user[item.key] : '')
      );
      this.listItems = this.listItems.concat([
        {
          key: 'my_orders',
          value: 'My Orders',
          seperate: false,
          link: 'my-orders',
        }
      ]);
    }
    this.isLoading = false;
  }

  logout(){
    this._authService.logout();
    this.user = undefined;
  }

  nvigateToHome() {
    this._router.navigateByUrl('/food-delivery/home', {
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
