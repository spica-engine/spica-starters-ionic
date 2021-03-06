import { Component, OnInit } from '@angular/core';
import { User, initialize } from '../services/bucket';
import { UserService } from '../services/user.service';
import { ChatService } from '../services/chat.service';
import { DataService } from '../services/data.service';
import { TabsService } from './tabs.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  me: User;
  selectedTab: string = 'home';
  backDropImage: string;
  unreadMessages: number = 0;
  loading: boolean = true;

  constructor(
    private _userService: UserService,
    private _chatService: ChatService,
    private _tabsService: TabsService,
    private _dataService: DataService,
    private _router: Router,
    private _authService: AuthService,
    private _commonService: CommonService
  ) {
    initialize({ identity: localStorage.getItem('chat_spica_token') });
  }

  ngOnInit() {
    this.getMe();
  }
  getMe() {
    this._userService.getActiveUser().then(
      async (data: User) => {
        if (data && !this.me) {
          this.me = data;
          this.loading = false;
          this._chatService.initialize();
          await this._dataService
            .setOnline('user', {}, this?.me?._id)
            .toPromise();
        } else this.loading = false;
      },
      (err) => {
        console.log('err :', err);
        this.loading = false;
      }
    );
    this._tabsService
      .watchBackdropImage()
      .subscribe((data) => (this.backDropImage = data));
    document.addEventListener('ionBackButton', (ev) => {
      this.backDropImage = null;
    });
    this._router.events.subscribe((e) => {
      if (e.hasOwnProperty('url')) {
        this.selectedTab = e['url'].split('/');
        this.selectedTab = this.selectedTab[3];
      }
      this._tabsService.selectedTab = this.selectedTab;
    });
  }
  async login(loginData) {
    this.loading = true;
    this._authService
      .login(loginData.email, loginData.password)
      .toPromise()
      .then(
        (_) => {
          this.me = undefined;
          this.getMe();
        },
        (err) => {
          this.loading = false;
          this._commonService.presentToast(err.message, 1500);
        }
      );
  }

  async register(registerData) {
    this._authService
      .register({ ...registerData })
      .toPromise()
      .then((res) => {
        this.login(registerData);
        this._commonService.presentToast(res['message'], 1500);
      })
      .catch((err) => {
        this._commonService.presentToast(err.error.message, 1500);
      });
  }
  routeTab(route) {
    this._router.navigateByUrl('/chat/tabs/' + route, {
      replaceUrl: true,
    });
  }
}
