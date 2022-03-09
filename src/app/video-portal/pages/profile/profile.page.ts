import { Component, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket'
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isLoading: boolean = true;
  user: DataService.User;
  listItems: Item[] = [];
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _commonService: CommonService) { }

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise();    
    if(this.user){
      this.listItems = [
        { key: 'name', value: '', seperate: true },
        { key: 'surname', value: '', seperate: true },
      ];
      this.listItems.forEach(
        (item) => (item.value = this.user[item.key] ? this.user[item.key] : '')
      );
      this.listItems = this.listItems.concat([
        {
          key: 'liked',
          value: 'Liked',
          seperate: false,
          link: '../liked/'
        },
        {
          key: 'disliked',
          value: 'Disliked',
          seperate: false,
          link: '../disliked/',
        }
      ]);
    }
    this.isLoading=false
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
    this._router.navigateByUrl('/video-portal/home', {
      replaceUrl: true,
    });
  }
  logout() {
    this.isLoading = true;
    this._authService.logout();
  }
}
