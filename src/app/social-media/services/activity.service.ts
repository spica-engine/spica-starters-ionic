import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Activity,activity, User ,user} from "../services/bucket";
import { DataService } from "./data.service";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  user: User;
  activities: Activity[] = [];
  last_unseen_index: number = 0;
  $activities: BehaviorSubject<Activity[]> = new BehaviorSubject([]);
  $unseenActivityCount: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    private _dataService: DataService,
    private _userService: UserService
  ) {}

  async initialize() {
    this.user = await this._userService.getActiveUser().toPromise();
    let queryParams = {};
    queryParams["filter"] = { owner: this.user._id };
    queryParams["limit"] = 20;
    queryParams["sort"] = { _id: -1 };
    queryParams["relation"] = ["user", "post"];

    activity
      .getAll({
        queryParams,
      })
      .then((activities) => {
        this.activities = activities;
        let unseen_activities_count = 0;

        this.activities.forEach((activity) => {
          if (
            new Date(activity.created_at) >
            new Date(
              localStorage.getItem("last_activity_visit_date") ||
                this.user.last_online_date
            )
          ) {
            unseen_activities_count += 1;
          }
        });

        this.last_unseen_index =
          this.activities.length - unseen_activities_count;
        this.$unseenActivityCount.next(unseen_activities_count);
        this.$activities.next(this.activities);
      })
      .catch((err) => console.log(err));
  }

  updateSeen() {
    this.$activities.next(this.activities);
    this.getUnseenActivity().subscribe((data) => {
      if (data != 0)
        this.activities[
          this.activities.length - (this.activities.length - data)
        ]["border"] = false;
    });

    if (
      this.last_unseen_index != this.activities.length &&
      this.last_unseen_index != 0
    )
      this.activities[this.activities.length - this.last_unseen_index][
        "border"
      ] = false;
    this.$unseenActivityCount.next(0);
  }

  getUnseenActivity() {
    return this.$unseenActivityCount;
  }

  getActivities() {
    return this.$activities;
  }

  async getNewActivities() {
    this.user = await this._userService.getActiveUser().toPromise();
    let queryParams = {};
    let newActivities;

    queryParams["filter"] = {
      owner: this.user._id,
      _id: {
        $gt: this.activities.length > 0 ? this.activities[0]._id : undefined,
      },
    };
    queryParams["limit"] = 20;
    queryParams["sort"] = { _id: -1 };
    queryParams["relation"] = ["user", "post"];

    this.last_unseen_index = this.activities.length;

    newActivities = await activity
      .getAll({
        queryParams,
      })
      .catch((err) => console.log(err));

    let newActivitiesArr = newActivities as Array<Activity>;
    if (newActivitiesArr.length > 0) {
      this.activities = newActivitiesArr.concat(this.activities);
    }

    this.activities = [
      ...new Map(this.activities.map((item) => [item["_id"], item])).values(),
    ];

    this.$activities.next(this.activities);
  }
}
