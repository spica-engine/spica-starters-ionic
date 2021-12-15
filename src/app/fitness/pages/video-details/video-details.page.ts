import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { video,Video,watched_video, User} from '../../services/bucket';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.page.html',
  styleUrls: ['./video-details.page.scss'],
})
export class VideoDetailsPage implements OnInit {

  id: any;
  video: Video;
  user: User;
  userVideo;
  constructor(private _route: ActivatedRoute, private _authService: AuthService) {
    this._authService.initBucket();

  }
  async ngOnInit() {
    this.user = (await this._authService.getUser().toPromise())
    this.id = this._route.snapshot.params.id;
    this.video = await this.getVideo();
  }
  async getVideo() {
    return video.get(this.id);
  }
  async watchVideo() {
    return watched_video.getAll({ queryParams: { filter: { user: this.user._id, video: this.id } } });

  }

  async watchedVideo() {
    this.userVideo = await this.watchVideo();

    if (!this.userVideo.length) {
      watched_video.insert({
        name: this.user.mail,
        user: this.user._id,
        video: this.id,
      })

    }
    else {
      this.userVideo[0].watched_date = new Date();
      watched_video.update(this.userVideo[0])

    }

  }
}
