import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  watched_video,
  Watched_Video,
  initialize,
  User,
} from '../../services/bucket';
@Component({
  selector: 'app-watched-videos-page',
  templateUrl: './watched-videos-page.page.html',
  styleUrls: ['./watched-videos-page.page.scss'],
})
export class WatchedVideosPagePage implements OnInit {
  watchedVideos: Watched_Video[];
  id: any;
  text: any;
  user: User;
  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService
  ) {
    this._authService.initBucket();
  }

  async ionViewWillEnter() {
    this.user = await this._authService.getUser().toPromise();
    this.watchedVideos = await this.getWatchedVideos();
    if (this.watchedVideos?.length <= 0) {
      this.text = 'The video you watched was not found';
    }
  }
  async ngOnInit() {
    this.id = this._route.snapshot.params.id;
  }

  async getWatchedVideos() {
    return watched_video.getAll({
      queryParams: {
        filter: { user: this.id },
        relation: ['video.teacher'],
        limit: 3,
        sort: { watched_date: -1 },
      },
    });
  }
}
