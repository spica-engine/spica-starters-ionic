import { Component, ViewChild } from '@angular/core';
import { Follow, Post, User, follow, post } from '../../services/bucket';

// import { ActivatedRoute, Router } from '@angular/router';
import {
  ActionSheetController,
  IonContent,
  IonInfiniteScroll,
  IonRefresher,
  ModalController,
} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
// import { ConfirmationModalComponent } from "src/app/components/generics/confirmation-modal/confirmation-modal.component";
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { ChatService } from '../../services/chat.service';
import { HashtagService } from '../../services/hashtag.service';
import { TabsService } from '../../tabs/tabs.service';
import { environment } from '../../services/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-social-profile',
  templateUrl: './social-profile.page.html',
  styleUrls: ['./social-profile.page.scss'],
})
export class SocialProfilePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { read: IonContent, static: false })
  private content: IonContent;
  @ViewChild(IonRefresher) ionRefresher: IonRefresher;

  // auth_identity;
  user: User & { following_count?: number; follower_count?: number };
  myAccounts: User[];
  posts: Post[] = [];
  likedPosts: Post[] = [];
  me: User;
  loading: boolean = true;
  privateAccount: boolean = false;
  wait_request_id: string;
  blocked_entry;
  scroll_params = {
    skip: 0,
    limit: 5,
  };
  is_followed_person: boolean = false;
  follow_entry: Follow;
  default_user_image = environment.user_img;
  hasTags: [] = [];
  progress_user = {
    follow: false,
    message: false,
  };
  discarded_post: string = '';
  follows_data;
  is_blocked_me: boolean = false;

  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public modalController: ModalController,
    private _chatService: ChatService,
    private _hashtagService: HashtagService,
    private _tabService: TabsService,
    private actionSheetCtrl: ActionSheetController,
    private translateService: TranslateService
  ) {}

  async ionViewWillEnter() {
    this.setInitialSettings();
    this.infiniteScroll ? (this.infiniteScroll.disabled = true) : '';
    this.me = await this._userService.getActiveUser().toPromise();
    this.user = await this._userService.getUserById(
      this.activatedRoute.snapshot.paramMap.get('userId')
    );
    this.user.thumbnail = this.user.thumbnail || this.default_user_image;
    this.blocked_entry = this._userService.blockedUsers.filter(
      (item) => item.blocked['_id'] == this.user._id
    )[0];
    let blockMe = await this._userService.checkBlockedMe(this.user);
    this.is_blocked_me = blockMe[0] ? true : false;
    await this.setFollowParams();
    if (this.blocked_entry) {
      this.loading = false;
    } else {
      if (!this.privateAccount) this.getPosts();
      else {
        this._userService.getWaitingRequest(this.user).then((requestData) => {
          this.wait_request_id = requestData[0]?._id;
          this.loading = false;
        });
      }
    }
  }

  getPosts() {
    this._postService
      .getPosts({
        filter: {
          user: this.user._id,
        },
        sort: { _id: -1 },
        skip: this.scroll_params.skip,
        limit: this.scroll_params.limit,
      })
      .then(
        (data) => {
          this.posts = this.posts.concat(data);
          this.loading = false;
          this.infiniteScroll?.complete();
          this.ionRefresher?.complete();
        },
        (err) => {
          console.log('error while getting posts in profile :', err);
          this.loading = false;
        }
      );
  }
  async setFollowParams() {
    let follows = {
      follower: 0,
      following: 0,
    };
    this.follows_data = await this.getFollows(this.user);

    this.follows_data.forEach((item) => {
      if (item.follower == this.user._id) follows.following += 1;
      if (item.following == this.user._id) follows.follower += 1;
      if (
        item.follower == this.me._id &&
        item.following == this.user._id &&
        !this.is_followed_person
      ) {
        this.follow_entry = item;
        this.is_followed_person = true;
      }
    });
    this.user.follower_count = follows.follower;
    this.user.following_count = follows.following;
    if (!this.blocked_entry)
      this.privateAccount =
        this.me._id != this.user._id &&
        !this.is_followed_person &&
        this.user?.visibility == 'private';
  }
  getFollows(user_data: User) {
    return follow.getAll({
      queryParams: {
        filter: {
          $or: [{ follower: user_data._id }, { following: user_data._id }],
        },
      },
    });
  }
  followUser() {
    this.progress_user.follow = true;
    this.user = JSON.parse(JSON.stringify(this.user));
    if (this.blocked_entry) {
      this._userService.unBlockUser(this.blocked_entry).then(() => {
        this.blocked_entry = undefined;
        this.progress_user.follow = false;
        this.privateAccount =
          this.me._id != this.user._id &&
          !this.is_followed_person &&
          this.user?.visibility == 'private';
      });
    } else {
      if (this.privateAccount) {
        if (this.wait_request_id)
          this.deleteWaitingRequest().then(() => {
            this.wait_request_id = undefined;
            this.progress_user.follow = false;
          });
        else
          this._userService.sendRequest(this.user).then((requestData) => {
            this.wait_request_id = requestData._id;
            this.progress_user.follow = false;
          });
      } else {
        this.is_followed_person = true;
        this.user.follower_count += 1;
        this._userService.followUser(this.user).then((data) => {
          this.follow_entry = data;
          this.progress_user.follow = false;
        });
      }
    }
  }
  async unFollowUser() {
    this.progress_user.follow = true;
    this.is_followed_person = false;
    this.user.follower_count -= 1;
    await this._userService.unFollowUser(this.follow_entry);
    if (this.user.visibility == 'private' && !this.blocked_entry)
      this.privateAccount = true;
    this.progress_user.follow = false;
  }

  loadData() {
    this.scroll_params.skip =
      this.scroll_params.limit + this.scroll_params.skip;
    this.getPosts();
  }

  setInitialSettings() {
    this.loading = true;
    this.posts = [];
    this.likedPosts = [];
    if (this.infiniteScroll) this.infiniteScroll.disabled = false;
    this.scroll_params.skip = 0;
  }
  deletedPost(event) {
    this.loading = true;
    post.remove(event).then(() => {
      this.posts = this.posts.filter((item) => item._id != event);
      this.loading = false;
      this.content.scrollToTop(0);
    });
  }
  editedPost(event) {
    let index = this.posts.findIndex((i) => i._id == event._id);
    if (index > 0) this.posts[index] = event;
    this.posts = JSON.parse(JSON.stringify(this.posts));
  }

  async checkTagCreate(text) {
    this.hasTags = await this._hashtagService.checkTagCreate(
      text,
      this.hasTags
    );
  }

  doRefresh(loading = false) {
    this.setInitialSettings();
    this.loading = loading;
    this.getPosts();
  }

  sendMessage() {
    this.progress_user.message = true;
    this._chatService.getChatByUserWithMe(this.user._id).then((data) => {
      this.progress_user.message = false;
      data[0]
        ? this.router.navigate(
            [
              `chats/${data[0]._id}`,
              {
                chat: JSON.stringify(data[0]),
              },
            ],
            { relativeTo: this.activatedRoute }
          )
        : this.navigateToChat();
    });
  }

  navigateToChat() {
    this.router.navigate(
      [`chats/${undefined}`, { user: JSON.stringify(this.user) }],
      { relativeTo: this.activatedRoute }
    );
  }
  followUsers() {
    this.setFollowParams();
  }
  async userProcess() {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: this.translateService.instant('block_user'),
          handler: () => {
            // this.blockUser();
            console.log('Cancel clicked');
          },
        },
        {
          text: this.translateService.instant('cancel'),
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
  // async blockUser() {
  //   const modal = await this.modalController.create({
  //     component: ConfirmationModalComponent,
  //     componentProps: {
  //       title: 'block_user',
  //       body: 'block_user_info',
  //     },
  //     cssClass: 'confirmation-modal-background',
  //   });
  //   await modal.present();
  //   const { data } = await modal.onWillDismiss();
  //   if (data.verify) {
  //     this.loading = true;
  //     this.blocked_entry = await this.userService
  //       .blockUser(this.user)
  //       .toPromise();
  //     if (this.is_followed_person) {
  //       await this.unFollowUser();
  //     }
  //     let followerData = this.follows_data.filter(
  //       (item) =>
  //         item.following == this.me._id && item.follower == this.user._id
  //     )[0];
  //     if (followerData) {
  //       await follow.remove(followerData._id).toPromise();
  //       this.userService.followerUsers = this.userService.followingUsers.filter(
  //         (item) => item._id != this.user._id
  //       );
  //     }
  //     if (this.wait_request_id) {
  //       await this.deleteWaitingRequest().toPromise();
  //       this.wait_request_id = undefined;
  //       this.progress_user.follow = false;
  //     }
  //     this.userService.userLikes = this.userService.userLikes.filter(
  //       (item) => item.post.user != this.user._id
  //     );
  //     this.privateAccount = false;
  //     this.loading = false;
  //   }
  // }
  deleteWaitingRequest() {
    return this._userService.deleteRequest(this.wait_request_id);
  }
  reportedPost(post, type) {
    this.discarded_post = post._id;
    setTimeout(() => {
      switch (type) {
        case 'post':
          this.posts = this.posts.filter((item) => item._id != post._id);
          break;
        case 'liked':
          this.likedPosts = this.likedPosts.filter(
            (item) => item._id != post._id
          );
          break;
      }
      this.discarded_post = '';
    }, 300);
  }
  clickedImage() {
    if (!this.is_blocked_me)
      this._tabService.backDropImage = this.user.thumbnail;
  }
}
