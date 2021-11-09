import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { user, User, initialize } from '../services/bucket';
import { UserService } from '../services/user.service';
// import { Device } from '@capacitor/device';
import { ChatService } from '../services/chat.service';
import { ActivityService } from '../services/activity.service';
// import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../services/data.service';
import { TabsService } from './tabs.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  me: User;
  userLikesCount: number = 0;
  isOldUser: boolean = false;
  selectedTab: string = 'home';
  backDropImage: string;
  unreadMessages: number = 0;

  constructor(
    private _userService: UserService,
    private _chatService: ChatService,
    private _activityService: ActivityService,
    private _tabsService: TabsService,
    private _translateService: TranslateService,
    private _dataService: DataService,
    private _router: Router
  ) {
    initialize({ identity: localStorage.getItem('socialmedia_spica_token') });
  }

  ngOnInit() {
    this.getMe();
  }
  getMe() {
    this._userService.getActiveUser().subscribe(
      async (data: User) => {
        if (data) {
          this.me = data;
          this.userLikesCount = this._userService.userLikes.length;
          this.isOldUser =
            new Date(this.me.created_at).getTime() <
            new Date().getTime() - 600 * 1000;
          this._chatService.initialize();
          this._activityService.initialize();
          this._translateService.setDefaultLang('en');
          this._translateService.currentLang = 'en';

          await this._dataService
            .setOnline(
              'user',
              { timezone: new Date().getTimezoneOffset() },
              this?.me?._id
            )
            .toPromise();
        }
      },
      (err) => console.log('err :', err)
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
}
