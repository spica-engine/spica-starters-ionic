import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ActivityService } from '../../services/activity.service';
import { Activity, User } from '../../services/bucket';
import { environment } from '../../services/environment';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  @ViewChild(IonRefresher) ionRefresher: IonRefresher;

  $activities: Subscription;
  activities: Activity[] = [];
  loading: boolean = true;
  showNew: boolean = false;
  last_unseen_index = 0;
  default_user_image = environment.user_img;
  scroll_params = {
    skip: 0,
    limit: 10,
  };
  user_requests: User[] = [];

  constructor(
    private _activityService: ActivityService,
    private _userService: UserService
  ) {}
  ngOnInit(): void {
    this._activityService
      .getUnseenActivity()
      .toPromise()
      .then((data) => (this.last_unseen_index = data));
    this.getActivities();
  }
  ionViewWillEnter() {
    this._activityService.getNewActivities();
    this._userService
      .getAllWaitingRequests()
      .then(
        (requestsData) =>
          (this.user_requests = requestsData.map((item) => item.sender) as any)
      );
  }

  ionViewWillLeave() {
    this.$activities.unsubscribe();
  }

  getActivities() {
    this.$activities = this._activityService
      .getActivities()
      .subscribe((activities) => {
        this.activities = activities;
        this.showNew = false;
        if (
          this._activityService.last_unseen_index != this.activities.length &&
          this._activityService.last_unseen_index != 0
        ) {
          this.showNew = true;
          this.activities[
            this.activities.length - this._activityService.last_unseen_index
          ]['border'] = true;
        }

        this.loading = false;
        this.ionRefresher?.complete();
      });
  }

  getNewActivities() {
    this._activityService.getNewActivities();
  }

  changeSeenStatus() {
    this._activityService.updateSeen();
  }

  ionViewDidLeave() {
    this.changeSeenStatus();
  }

  doRefresh() {
    this.loading = false;
    this.changeSeenStatus();
    this.getNewActivities();
  }
}
