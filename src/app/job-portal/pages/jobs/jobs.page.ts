import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../services/auth.service';
import {
  Attributes,
  attributes,
  Job_Advert,
  User,
} from '../../services/bucket';
import { UserService } from '../../services/user.service';
import { job_advert } from '../../services/bucket';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  constructor(
    private _authService: AuthService,
    private _commonService: CommonService,
    private _userService: UserService,
    private _router: Router
  ) {}
  loading: boolean = true;
  me: User;
  jobs: Job_Advert[] = [];
  attributes: Attributes[];
  ngOnInit() {
    this.getMe();
  }
  getMe() {
    this._userService.getActiveUser().then(
      async (data: User) => {
        if (data && !this.me) {
          this.me = data;
          this.loading = false;
          this.triggerAllRequests();
        } else this.loading = false;
      },
      (err) => {
        console.log('err :', err);
        this.loading = false;
      }
    );
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
  async triggerAllRequests() {
    this.jobs = await this.getJobs();
    this.attributes = await this.getAttributes();
  }
  getJobs() {
    return job_advert.getAll({ queryParams: { relation: true } });
  }
  getAttributes() {
    return attributes.getAll();
  }
}
