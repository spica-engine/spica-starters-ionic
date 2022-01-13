import { Component, OnInit } from '@angular/core';
import { User, video, Video } from '../../services/bucket';
import { AuthService } from '../../services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  videos: Video[];
  loading: boolean = true;
  me: User;
  customFilter: any;
  categories = [
    { name: 'Bronze', _id: 'bronze' },
    { name: 'Silver', _id: 'silver' },
    { name: 'Gold', _id: 'gold' },
  ];
  constructor(
    private _authService: AuthService,
    private _commonService: CommonService
  ) {
    this._authService.initBucket();
  }

  ngOnInit() {
    this.getMe();
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
      .then((res) => {
        this.login(registerData);
        this._commonService.presentToast(res['message'], 1500);
      })
      .catch((err) => {
        this._commonService.presentToast(err.error.message, 1500);
      });
  }
  getMe() {
    this._authService
      .getUser()
      .toPromise()
      .then(
        async (data: User) => {
          if (data && !this.me) {
            this.me = data;
            await this.getVideos();
          }
          this.loading = false;
        },
        (err) => {
          console.log('err :', err);
          this.loading = false;
        }
      );
  }
  async getVideos() {
    this.videos = await video.getAll({
      queryParams: { limit: 5, relation: true, filter: this.customFilter },
    });
    this.loading = false;
  }
  clickedCategory(event) {
    this.loading = true;
    
    let category = this.categories.filter((item) => item._id == event)[0];
    this.customFilter = category ? { permissions: category._id } : null;
    this.getVideos();
  }
}
