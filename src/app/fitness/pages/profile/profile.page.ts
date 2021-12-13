import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { user, User, initialize, watched_video, Watched_Video, training, Training, performance, Performance } from '../../services/bucket';

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
  constructor() {
    initialize({ identity:  localStorage.getItem('fitness_spica_token')});
  }

  async ngOnInit() {
    this.user = await this.getUser();
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
          link: '../trainings/'+this.user._id,
        },
        {
          key: 'watched_videos',
          value: 'Watched Videos',
          seperate: false,
          link: '../watched-videos-page/'+this.user._id,
        },
        {
          key: 'food_program',
          value: 'Food Program',
          seperate: false,
          link: '../food-program/'+this.user._id,
        },
      ]);
    }
    this.watchVideos = await this.getWatchVideos();
    this.traning = await this.getTraning();
    this.performance = await this.getPerformance();  
  }
  
  async getUser() {
    return user.get("618b75295ee9b9002f154683");
  }
  async getWatchVideos() {
    return watched_video.getAll({ queryParams: { filter: { user: '618b75295ee9b9002f154683' }, relation: true, sort: { "_id": -1 } } });
  }
  async getTraning() {
    return training.getAll({ queryParams: { filter: { user: '618b75295ee9b9002f154683' }, relation: "packet.videos" } });
  }
  async getPerformance() {
    return performance.getAll({ queryParams: { filter: { user: '618b75295ee9b9002f154683' }, relation: true } });
  }
}
