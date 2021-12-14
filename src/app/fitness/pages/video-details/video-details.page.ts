import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../services/environment';
import { video,Video,initialize,watched_video} from '../../services/bucket';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.page.html',
  styleUrls: ['./video-details.page.scss'],
})
export class VideoDetailsPage implements OnInit {

  id: any;
  video: Video;
  userVideo;
  constructor(private _route: ActivatedRoute, private _authService: AuthService) {
    this._authService.initBucket();

  }
  async ngOnInit() {
    this.id = this._route.snapshot.params.id;
    this.video = await this.getVideo();

  }
  async getVideo() {
    return video.get(this.id);
  }
  async watchVideo() {
    return watched_video.getAll({ queryParams: { filter: { user: environment.user, video: this.id } } });

  }

  async watchedVideo() {
    this.userVideo = await this.watchVideo();

    if (!this.userVideo.length) {
      watched_video.insert({
        user: environment.user,
        video: this.id,
      })

    }
    else {
      this.userVideo[0].watched_date = new Date();
      watched_video.update(this.userVideo[0])

    }

  }
}
