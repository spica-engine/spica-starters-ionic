/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userId: string;
  categoryes: DataService.Category[] = [];
  comments: DataService.Comment[] = [];
  titles: DataService.Title[] = [];
  user: DataService.User;
  likedComments: DataService.Comment[] = [];
  dislikedComments: DataService.Comment[] = [];
  followedUsers: string[] = [];
  defaultAvatar: string = environment.user_img;

  constructor(private _authService: AuthService, private _router: Router) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.userId = (await this._authService.getUser().toPromise())?._id;
    if (this.userId) {
      await this.getUser();
    }
    await this.getCategory();
    await this.getComments();
    this.getTitles();
  }

  async getUser() {
    this.user = await DataService.user.get(this.userId, {
      queryParams: { relation: true },
    });
    for (const follower of this.user.followers) {
      this.followedUsers.push(follower['_id']);
    }
  }

  checkUserLogin() {
    if (!this.user) {
      this._router.navigate(['/forum/authorization']);
      return;
    }
  }

  getCategory() {
    return DataService.category.getAll().then((res) => {
      this.categoryes = res;
    });
  }

  async getComments(catId = undefined) {
    await DataService.comment
      .getAll({
        queryParams: {
          limit: 10,
          relation: true,
          filter: { is_post: true, category: catId },
        },
      })
      .then((res) => {
        this.comments = res;
        if (this.comments.length) {
          this.comments.forEach((el) => {
            if (this.followedUsers.includes(el.user['_id'])) {
              el['is_followed'] = true;
            }
          });
        }
      });
  }

  getTitles() {
    DataService.title.getAll().then((res) => {
      this.titles = res;
    });
  }

  async follow(user) {
    this.checkUserLogin();
    let followedUser = await DataService.user.get(user._id);
    let commentIndex = this.comments.findIndex((el) => el.user['_id'] == user['_id']);

    let controlUnFollowRequest = followedUser.followings.find((el) => {
      return el == this.user._id;
    });

    if (controlUnFollowRequest) {
      this.comments[commentIndex]['is_followed'] = false;
      followedUser.followings = followedUser.followings.filter((el) => {
        return el !== this.user._id;
      });
      this.user.followers = this.user.followers.filter((el) => {
        return el['_id'] != followedUser._id;
      });
      DataService.user.patch({
        _id: followedUser._id,
        followings: followedUser.followings,
      });
      DataService.user.patch({
        _id: this.user._id,
        followers: this.user.followers,
      });
    } else {
      this.comments[commentIndex]['is_followed'] = true;
      this.user.followers.push(user);
      
      followedUser.followings.push(this.user._id);
      DataService.user.patch({
        _id: followedUser._id,
        followings: followedUser.followings,
      });
      DataService.user.patch({
        _id: this.user._id,
        followers: this.user.followers,
      });
    }
  }

  async like(comment) {
    this.checkUserLogin();
    let myLike = comment.likes.find((el) => {
      return el._id == this.user._id;
    });

    if (!myLike) {
      comment.likes = comment.likes || [];
      comment.likes.push(this.user);

      DataService.comment.patch({ _id: comment._id, likes: comment.likes });
      comment.dislikes = comment.dislikes.filter((el) => {
        return el._id !== this.user._id;
      });
      DataService.comment.patch({
        _id: comment._id,
        dislikes: comment.dislikes,
      });
    } else {
      comment.likes = comment.likes.filter((el) => {
        return el._id !== this.user._id;
      });

      DataService.comment.patch({ _id: comment._id, likes: comment.likes });
    }
  }

  async dislike(comment) {
    this.checkUserLogin();
    let myDislike = comment.dislikes.find((el) => {
      return el._id == this.user._id;
    });
    if (!myDislike) {
      comment.dislikes = comment.dislikes || [];
      comment.dislikes.push(this.user);

      DataService.comment.patch({
        _id: comment._id,
        dislikes: comment.dislikes,
      });
      comment.likes = comment.likes.filter((el) => {
        return el._id !== this.user._id;
      });
      DataService.comment.patch({ _id: comment._id, likes: comment.likes });
    } else {
      comment.dislikes = comment.dislikes.filter((el) => {
        return el._id !== this.user._id;
      });
      DataService.comment.patch({
        _id: comment._id,
        dislikes: comment.dislikes,
      });
    }
  }
}
