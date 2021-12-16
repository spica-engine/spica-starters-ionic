import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonContent,
  IonInfiniteScroll,
  IonRefresher,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { PostService } from '../../services/post.service';
import { ActivityService } from './../../services/activity.service';
import { HashtagService } from './../../services/hashtag.service';
import { first } from 'rxjs/operators';
import { ChatService } from './../../services/chat.service';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';
import { Post, User, post, initialize, follow } from '../../services/bucket';
import { PostCreatePage } from '../post-create/post-create.page';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonRefresher) ionRefresher: IonRefresher;
  @ViewChild(IonContent, { read: IonContent, static: false })
  private content: IonContent;

  posts: Post[] = [];
  me: User;
  loading: boolean = true;
  scroll_params = {
    skip: 0,
    limit: 10,
  };
  unseenActivities: number;
  hasTags: [] = [];
  discarded_post: string = '';
  unreadMessages: number = 0;
  user_followers = [];
  activitySubscribe: Subscription;
  chatSubscribe: Subscription;
  userSubscription: Subscription;

  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private _activityService: ActivityService,
    private _hashtagService: HashtagService,
    public modalController: ModalController,
    private _chatService: ChatService,
    private _toastController: ToastController,
    private _translateService: TranslateService
  ) {
    initialize({ identity: localStorage.getItem('socialmedia_spica_token') });
  }
  ngOnInit() {
    this.activitySubscribe = this._activityService
      .getUnseenActivity()
      .subscribe((data) => (this.unseenActivities = data));
    this.chatSubscribe = this._chatService
      .getUnreadMessageCount()
      .subscribe((data) => (this.unreadMessages = data));
    this.userSubscription = this._userService
      .getActiveUser()
      .subscribe(async (data) => {
        if (data && !this.me) {
          this.me = data;
          await this.setFollowers();
          this.getPosts();
        }
      });
  }
  ngOnDestroy(): void {
    this.activitySubscribe.unsubscribe();
    this.chatSubscribe.unsubscribe();
    this.userSubscription.unsubscribe();
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
  async setFollowers() {
    let followers: any = await this.getUserFollowing();
    this.user_followers = followers.map((item) => (item = item.following));
    this.user_followers.push(this.me._id);
  }
  getUserFollowing() {
    return follow.getAll({
      queryParams: {
        filter: {
          follower: this.me._id,
        },
      },
    });
  }
  getPosts() {
    this._postService
      .getPosts({
        filter: { user: { $in: this.user_followers } },
        sort: { _id: -1 },
        skip: this.scroll_params.skip,
        limit: this.scroll_params.limit,
      })
      .then((data) => {
        this.posts = this.posts.concat(data);
        this.loading = false;
        this.ionRefresher.complete();
        if (this.infiniteScroll) this.infiniteScroll.complete();
      });
  }

  loadData() {
    this.scroll_params.skip += this.scroll_params.limit;
    this.getPosts();
  }
  setInitialSettings() {
    if (this.infiniteScroll) this.infiniteScroll.disabled = false;
    this.scroll_params.skip = 0;
  }

  deletedPost(event) {
    this.discarded_post = event;
    post.remove(event).then(() => {
      this.posts = this.posts.filter((item) => item._id != event);
      this.discarded_post = '';
      this.content.scrollToTop(0);
    });
  }

  async checkTagCreate(text) {
    this.hasTags = await this._hashtagService.checkTagCreate(
      text,
      this.hasTags
    );
  }

  editedPost(event) {
    let index = -1;
    index = this.posts.findIndex((i) => i._id == event._id);
    if (index != -1) {
      this.posts[index] = event;
      this.posts = JSON.parse(JSON.stringify(this.posts));
    }
  }
  async doRefresh() {
    this.posts = [];
    await this.setFollowers();
    this.setInitialSettings();
    this.loading = false;
    this.getPosts();
  }
  reportedPost(post) {
    this.discarded_post = post._id;
    this.posts = this.posts.filter((item) => item._id != post._id);
    this.discarded_post = '';
  }
  async addPost() {
    const modal = await this.modalController.create({
      component: PostCreatePage,
      swipeToClose: true,
      componentProps: {
        user: this.me,
      },
    });
    await modal.present();
    let resData = await modal.onDidDismiss();
    if (resData.data.refresh) {
      this._postService
        .getPosts({ filter: { _id: { $in: [resData.data.editpost._id] } } })
        .then(async (data) => {
          this.posts.unshift(data[0]);
          this.content.scrollToTop();
          let toast = await this._toastController.create({
            header: this._translateService.instant('post-create-info'),
            duration: 3000,
            cssClass: 'toast-custom-class',
          });
          toast.present();
        });
      this.content.scrollToTop();
    }
  }
}
