import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { AuthService } from '../../services/auth.service';
import {
  User,
  Watched_Video,
  Training,
  Performance,
} from '../../services/bucket';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User;
  me: User;
  watchVideos: Watched_Video[];
  control: boolean = true;
  traning: Training[];
  performance: Performance[];
  listItems: Item[] = [];
  isLoading: boolean = true;
  constructor(private _authService: AuthService) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.isLoading = true;
    this.user = await this._authService.getUser().toPromise();
    this.me = this.user;
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
          key: 'trainings',
          value: 'Trainings',
          seperate: false,
          link: '../trainings/' + this.user._id,
        },
        {
          key: 'watched_videos',
          value: 'Watched Videos',
          seperate: false,
          link: '../watched-videos-page/' + this.user._id,
        },
        {
          key: 'food_program',
          value: 'Food Program',
          seperate: false,
          link: '../food-program/' + this.user._id,
        },
        {
          key: 'buyed_videos',
          value: 'Buyed Videos',
          seperate: false,
          link: '../buyed-videos/',
        },
      ]);
    }
    this.isLoading = false;
  }
  logout() {
    this.isLoading = true;
    this._authService.logout();
  }
}
