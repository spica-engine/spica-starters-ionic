import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-buyed-videos',
  templateUrl: './buyed-videos.page.html',
  styleUrls: ['./buyed-videos.page.scss'],
})
export class BuyedVideosPage implements OnInit {

  user: DataService.User;
  videos: DataService.Video[];
  loading: boolean=true;

  constructor(private _authService: AuthService) {
    this._authService.initBucket();
   }

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise()
    this.getBuyedVideos();
  }
  async getBuyedVideos(){
    this.videos = await DataService.video.getAll({ queryParams: { filter: { _id: { $in: this.user.buyed_videos } },relation:true } })
    this.loading = false;
  }

}
