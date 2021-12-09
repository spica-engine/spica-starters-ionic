import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() comment;
  @Input() details: boolean = false;
  @Input() isComment: boolean = false;

  userId: string;
  user: DataService.User;
  defaultAvatar: string = environment.user_img;
  isLoading: boolean = true;
  myAction: string;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _alertController: AlertController
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.userId = (await this._authService.getUser().toPromise())?._id;
    if(this.userId){
      await this.getUser();
      let isDisliked = this.comment.dislikes.find((el) => {
        return el._id == this.userId;
      });
  
      if (isDisliked) {
        this.myAction = 'disliked';
      } else {
        let isLiked = this.comment.likes.find((el) => {
          return el._id == this.userId;
        });
        if (isLiked) {
          this.myAction = 'liked';
        }
      }
  
      if (this._authService.followingUsers.includes(this.comment.user._id)) {
        this.comment['is_followed'] = true;
      }
    }
    
    this.isLoading = false;
  }

  async getUser() {
    this.user = await DataService.user.get(this.userId, {
      queryParams: { relation: true },
    });
  }

  checkUserLogin() {
    if (!this.user) {
      this._router.navigateByUrl('/forum/authorization', {replaceUrl: true});
      return false;
    }
    return true
  }

  likeDislike(action) {
    if(!this.checkUserLogin()) return
    this.myAction = `${action}d`;

    let dislikes = this.comment.dislikes;
    let likes = this.comment.likes;

    let actionArr = this.comment[`${action}s`] || [];
    let oppositeArr = action == 'like' ? dislikes : likes;

    let myAction = actionArr.find((el) => {
      return el._id == this.user._id;
    });

    if (!myAction) {
      actionArr.push(this.user);

      oppositeArr = oppositeArr.filter((el) => {
        return el._id !== this.user._id;
      });
    } else {
      this.myAction = undefined;
      actionArr = actionArr.filter((el) => {
        return el._id !== this.user._id;
      });
    }

    this.comment.likes = action == 'like' ? actionArr : oppositeArr;
    this.comment.dislikes = action == 'dislike' ? actionArr : oppositeArr;

    DataService.comment.patch({
      _id: this.comment._id,
      likes: this.comment.likes,
      dislikes: this.comment.dislikes,
    });
  }

  async follow() {
    if(!this.checkUserLogin()) return

    if (this._authService.followingUsers.includes(this.comment.user._id)) {
      this.comment['is_followed'] = false;
      this._authService.unfollowUser(this.comment.user._id);

      this.comment.user.followers = this.comment.user.followers.filter((el) => {
        return el !== this.userId;
      });
    } else {
      this.comment['is_followed'] = true;
      this._authService.followUser(this.comment.user._id);

      this.comment.user.followers = this.comment.user.followers || [];
      this.comment.user.followers.push(this.userId);
    }

    DataService.user.patch({
      _id: this.userId,
      followings: this._authService.followingUsers,
    });
    DataService.user.patch({
      _id: this.comment.user._id,
      followers: this.comment.user.followers,
    });
  }

  async presentAlert() {
    const alert = await this._alertController.create({
      header: 'Alert',
      message: 'Are you sure delete the comment',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert.dismiss(false);
          },
        },
        {
          text: 'Okay',
          role: 'okay',
          handler: () => {
            alert.dismiss(true);
          },
        },
      ],
    });

    await alert.present();
    let result = await alert.onDidDismiss();

    if (result) {
      if (result.role == 'okay') {
        this.isLoading = true;
        await DataService.comment.remove(this.comment._id);
      }
    }
  }
}
