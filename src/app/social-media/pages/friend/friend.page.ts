import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Follow, User ,follow} from "../../services/bucket";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.page.html',
  styleUrls: ['./friend.page.scss'],
})
export class FriendPage{
  query_user_id;
  type = 0;
  user: User;
  userFollows: Follow[];
  user_follows_arr = [];
  loading: boolean = true;
  me: User;
  myFollows = [];
  allUsers = [];
  showedUsers = [];
  progress_user: string;
  searchedText: string;
  sendedRequests = [];

  constructor(
    private route: ActivatedRoute,
    private _userService: UserService,
  ) {}

  async ionViewWillEnter() {
    this.userFollows = undefined;
    this.me = await this._userService.getActiveUser().toPromise();
    this.query_user_id = await this.route.snapshot.paramMap.get("userId");
    this.type = (await this.route.snapshot.params.type) || 0;
    if (this.me._id == this.query_user_id) {
      this.user = this.me;
    } else
      this.user = await this._userService
        .getUserById(this.query_user_id)
    // if (this.user._id != this.me._id) this.myFollows = await this.getMyFollows().toPromise()
    this.setUserFollowParams();
    this.sendedRequests = await this._userService
      .getAllSendedRequests()
  }
  getFollows() {
    return follow
      .getAll({
        queryParams: {
          filter: {
            $or: [{ follower: this.user._id }, { following: this.user._id }],
          },
          relation: true,
          sort: { _id: -1 },
        },
      })
  }

  async setUserFollowParams() {
    this.user_follows_arr = [];
    this.progress_user = "";
    this.userFollows = this.userFollows || (await this.getFollows());
    if (this.user._id == this.me._id)
      this.myFollows = JSON.parse(JSON.stringify(this.userFollows));
    else this.myFollows = await this.getMyFollows()
    this.userFollows.forEach((item) => {
      if (item.follower._id == this.user._id)
        this.user_follows_arr.push({
          user: item.following,
          type: 1,
          _id: item._id,
        });
      if (item.following._id == this.user._id)
        this.user_follows_arr.push({
          user: item.follower,
          type: 0,
          _id: item._id,
        });
    });

    this.myFollows = this.myFollows.map((my_follow) => {
      my_follow.follower = my_follow.follower._id || my_follow.follower;
      my_follow.following = my_follow.following._id || my_follow.following;
      return my_follow;
    });
    this.user_follows_arr.forEach((item) => {
      let follow_item = this.myFollows.filter(
        (my_items) =>
          my_items.follower == item.user._id ||
          my_items.following == item.user._id
      );
      switch (follow_item.length) {
        case 2:
          if (this.me._id == this.user._id)
            item.user["follow_state"] = this.type == 0 ? "mutual" : "unfollow";
          else item.user["follow_state"] = "none";
          break;
        case 1:
          if (follow_item[0].follower == item.user._id)
            item.user["follow_state"] = "follow";
          if (
            follow_item[0].following == item.user._id &&
            this.me._id == this.user._id
          ) {
            //unfollow only in my profile
            item.user["follow_state"] = "unfollow";
          }
          if (!item.user["follow_state"]) {
            item.user["follow_state"] = "none";
          }
          break;
        case 0:
          item.user["follow_state"] = "follow";
          break;
        default:
          item.user["follow_state"] = "none";
          break;
      }
      if (
        item.user["follow_state"] == "follow" &&
        this.sendedRequests.length > 0
      ) {
        item.user["follow_state"] = this.sendedRequests.filter(
          (sended) => sended.reciever == item.user["_id"]
        )[0]
          ? "send_request"
          : "follow";
      }
    });
    this.loading = false;
    this.allUsers = this.user_follows_arr.filter(
      (item) => this.type == item.type
    );
    if (!this.searchedText) this.showedUsers = [...this.allUsers];
    else this.getUserBySearch();
  }

  changeType(type) {
    this.loading = true;
    this.type = type;
    setTimeout(() => {
      this.setUserFollowParams();
    }, 500);
  }

  getMyFollows() {
    return follow.getAll({
      queryParams: {
        filter: {
          $or: [{ follower: this.me._id }, { following: this.me._id }],
        },
      },
    });
  }

  followOperation(item) {
    this.progress_user = item._id;
    if (item.user.follow_state == "follow") this.followUser(item);
    if (item.user.follow_state == "unfollow") this.unFollowUser(item);
    if (item.user.follow_state == "mutual") this.removeFollow(item);
    if (item.user.follow_state == "send_request") this.cancelRequest(item);
  }
  cancelRequest(item) {
    this._userService
      .deleteRequest(
        this.sendedRequests.filter(
          (sended) => sended.reciever == item.user["_id"]
        )[0]._id
      )
      .then(() => {
        this.sendedRequests = this.sendedRequests.filter(
          (sended) => sended.reciever != item.user["_id"]
        );
        this.userFollows = undefined;
        this.setUserFollowParams();
      });
  }
  removeFollow(entry) {
    follow
      .remove(entry._id)
      .then(() => {
        this.userFollows = undefined;
        this._userService.followerUsers = this._userService.followerUsers.filter(
          (item) => item._id != entry.user._id
        );
        this.setUserFollowParams();
      });
  }

  followUser(entry) {
    entry.user["visibility"] == "private"
      ? this._userService
          .sendRequest(entry.user._id)
          .then((requestData) => {
            this.userFollows = undefined;
            this.sendedRequests.push(requestData);
            this.setUserFollowParams();
          })
      : this._userService
          .followUser(entry.user)
          .then(() => {
            this.userFollows = undefined;
            this.setUserFollowParams();
          });
  }

  unFollowUser(entry) {
    this._userService
      .unFollowUser(entry)
      .then(() => {
        this.userFollows = undefined;
        this.setUserFollowParams();
      });
  }
  getUserBySearch() {
    this.showedUsers = this.allUsers.filter((item) =>
      item.user.username
        .toLowerCase()
        .includes(this.searchedText.toLocaleLowerCase())
    );
  }
}

