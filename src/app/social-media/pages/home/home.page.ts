import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonContent,
  IonInfiniteScroll,
  IonRefresher,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { PostService } from '../../services/post.service';
import { DataService } from './../../services/data.service';
import { ActivityService } from './../../services/activity.service';
import { HashtagService } from './../../services/hashtag.service';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
// import { ConfirmationModalComponent } from 'src/app/components/generics/confirmation-modal/confirmation-modal.component';
import { ChatService } from './../../services/chat.service';
// import { TranslateService } from '@ngx-translate/core';
// import { dateFromObjectId } from 'src/app/utils/helpers';
// import { OnboardingPage } from '../onboarding/onboarding.page';
import { UserService } from '../../services/user.service';
import { Post, User,post,initialize } from '../../services/bucket';
import { TabsService } from '../../tabs/tabs.service';
import { environment } from '../../services/environment';

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

  posts: Post[];
  discoverPosts: Post[] = [];
  me: User;
  loading: boolean = false;
  user_followers;
  premiumExplores: any = [];
  scroll_params = {
    skip: 0,
    limit: 10,
    discover_limit: 10,
  };
  unseenActivities: number;
  hasTags: [] = [];
  tabsSubscription: Subscription;
  discarded_post: string = '';
  unreadMessages: number = 0;
  userLikesCount: number = 0;
  isOldUser: boolean = false;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private dataService: DataService,
    private activityService: ActivityService,
    private hashtagService: HashtagService,
    private tabService: TabsService,
    public modalController: ModalController,
    private chatService: ChatService,
    // private toastController: ToastController,
    // private translateService: TranslateService
  ) {
    initialize({ identity: localStorage.getItem("socialmedia_spica_token") });
    this.activityService
      .getUnseenActivity()
      .subscribe((data) => (this.unseenActivities = data));
  }
  async ngOnInit() {
    this.chatService
      .getUnreadMessageCount()
      .subscribe((data) => (this.unreadMessages = data));
    this.me = await this.userService.getActiveUser().toPromise();
    //
    this.userLikesCount = this.userService.userLikes.length;
    this.isOldUser =
      new Date(this.me.created_at).getTime() <
      new Date().getTime() - 600 * 1000;
    if (this.userLikesCount == 0 && !this.isOldUser) {
      this.openOnboardModal();
      return;
    } else this.initializeConfig();
  }
  async initializeConfig() {
    //
    this.user_followers = this.userService.followingUsers.map(
      (user: User) => user._id
    );
    this.user_followers.push(this.me._id);
    if (this.user_followers.length > 1) this.discoverPosts = [];
    else {
      this.posts = [];
      this.postService.clearCache();
    }
    if (
      this.postService.posts.length &&
      this.postService.posts.length >= this.scroll_params.limit
    ) {
      this.posts = JSON.parse(JSON.stringify(this.posts || []));
      this.loading = false;
    }
    // if (
    //   !this.postService.posts.length ||
    //   this.postService.posts.length < this.scroll_params.limit
    // ) {
    //   this.posts = undefined;
    this.getPosts();
    // }
    this.premiumExplores = await this.postService
      .getExploreUsers(0, 20)
      .toPromise();
    if (JSON.parse(localStorage.getItem('showed_info'))['home'] == 'true')
      this.openInfoModal();
  }
  ionViewWillLeave() {
    if (this.tabsSubscription) this.tabsSubscription.unsubscribe();
  }
  ionViewWillEnter() {
    this.subscribeToTabsEvent();
  }
  async getPosts() {
    if (this.discoverPosts.length) {
      this.discoverPosts = this.discoverPosts.concat(
        await this.postService
          .getExplorePosts(this.scroll_params.discover_limit, this.me._id)
          .toPromise()
      );
    } else {
      let classifiedPosts = [];
      classifiedPosts = await this.getClassifiedPosts();
      if (classifiedPosts.length < this.scroll_params.limit) {
        let discoverLimit = this.scroll_params.limit - classifiedPosts.length;
        this.discoverPosts = await this.postService
          .getExplorePosts(discoverLimit, this.me._id)
          .toPromise();
        // if (this.discoverPosts.length < this.scroll_params.limit) {
        //   this.infiniteScroll.disabled = true;
        // }
      }
      this.posts = this.postService.posts;
    }
    this.loading = false;
    this.ionRefresher.complete();
    if (this.infiniteScroll) this.infiniteScroll.complete();
  }

  async getClassifiedPosts() {
    let datas = await this.dataService
      .getClassifiedPosts(
        this.scroll_params.skip,
        this.scroll_params.limit,
        this.me._id
      )
      .toPromise();
    let friendsLikes = datas['likes'];
    let friendsComments = datas['comments'];
    let normalPosts = datas['posts'];

    let friendsLikesIds = friendsLikes.map((p) => p.post) as string[];
    let friendsCommentsIds = friendsComments.map((p) => p.post) as string[];

    let classifiedPosts = await this.postService
      .getPosts(
        {
          filter: {
            _id: {
              $in: [...friendsLikesIds, ...friendsCommentsIds, ...normalPosts],
            },
          },
          relation: ['post.user', 'post.tags', 'post.hashtags'],
        },
        true
      )
      .then((posts) =>
          posts.map((post) => {
            if (friendsLikesIds.includes(post._id)) {
              let likeEntry = friendsLikes.filter((p) => p.post == post._id);
              post['class'] = {
                user:
                  likeEntry[0].user == this.me._id
                    ? this.me
                    : this.userService.followingUsers.filter(
                        (user: User) => user._id == likeEntry[0].user
                      )[0],
                action: 'liked',
              };
            } else if (friendsCommentsIds.includes(post._id)) {
              let commentedEntry = friendsComments.filter(
                (p) => p.post == post._id
              )[0];
              post['class'] = {
                user: this.userService.followingUsers.filter(
                  (user: User) => user._id == commentedEntry.user
                )[0],
                comment: commentedEntry.comment,
                tags: commentedEntry.tags,
                hastags: commentedEntry.hastags,
                action: 'commented',
              };
            }

            return post;
          })
        )
    return classifiedPosts;
  }

  repost() {}

  loadData() {
    this.scroll_params.skip =
      this.scroll_params.limit + this.scroll_params.skip;
    this.getPosts();
  }
  setInitialSettings() {
    if (this.infiniteScroll) this.infiniteScroll.disabled = false;
    this.scroll_params.skip = 0;
    this.discoverPosts = [];
  }

  deletedPost(event) {
    this.discarded_post = event;
    this.postService
      .deletePost(event)
      .then((_) => {
        this.posts = this.posts.filter((item) => item._id != event);
        this.discarded_post = '';
        this.content.scrollToTop(0);
      });
  }
  async rePosted(event) {
    this.loading = true;
    await this.checkTagCreate(event['text']);
    event['hashtags'] = this.hasTags;
    post.insert(event).then((post_data) =>
      this.postService
        .getPosts({
          filter: { _id: post_data._id },
          relation: ['post.user', 'post.tags', 'post.hashtags'],
        })
        .then((data) => {
          this.posts.unshift(data[0]);
          this.loading = false;
          this.content.scrollToTop(0);
        })
    );
  }

  async checkTagCreate(text) {
    this.hasTags = await this.hashtagService.checkTagCreate(text, this.hasTags);
  }

  editedPost(event) {
    let index = -1;
    index = this.posts.findIndex((i) => i._id == event._id);
    if (index != -1) {
      this.posts[index] = event;
      this.posts = JSON.parse(JSON.stringify(this.posts));
    }
    if (index == -1) {
      index = this.discoverPosts.findIndex((i) => i._id == event._id);
      if (index != -1) {
        this.discoverPosts[index] = event;
        this.discoverPosts = JSON.parse(JSON.stringify(this.discoverPosts));
      }
    }
  }
  async doRefresh(loading = false) {
    this.setInitialSettings();
    this.loading = loading;
    this.postService.clearCache();
    this.scroll_params.skip += this.postService.seenPosts.length;
    await this.getPosts();
  }

  followExloredUser(u: User) {
    setTimeout(() => {
      this.premiumExplores = this.premiumExplores.filter(
        (user: User) => user._id != u._id
      );
    }, 300);
  }
  subscribeToTabsEvent() {
    this.tabsSubscription = this.tabService
      .listenTabClick()
      .subscribe((tab_info: string) => {
        let post_id = tab_info.split('home_')[1];
        if (post_id && this.user_followers) {
          this.postService
            .getPosts({ filter: { _id: { $in: [post_id] } } }, true)
            .then(async (data) => {
              this.posts.unshift(data[0]);
              this.content.scrollToTop();
              // let toast = await this.toastController.create({
              //   header: this.translateService.instant('post-create-info'),
              //   duration: 3000,
              //   cssClass: 'toast-custom-class',
              // });
              // toast.present();
            });
        }
        this.content.scrollToTop();
      });
  }
  async openInfoModal() {
    // const modal = await this.modalController.create({
    //   component: ConfirmationModalComponent,
    //   componentProps: {
    //     modal_title: 'information',
    //     title: 'to_inform',
    //     body: 'page_information.home',
    //     closable: false,
    //     countdownable: true,
    //     buttons: ['understand'],
    //   },
    //   cssClass: 'confirmation-modal-background',
    // });
    // await modal.present();
    // const { data } = await modal.onWillDismiss();
    // if (data.verify) {
    //   let infos = JSON.parse(localStorage.getItem('showed_info'));
    //   infos['home'] = 'false';
    //   localStorage.setItem('showed_info', JSON.stringify(infos));
    // }
  }
  reportedPost(post, type) {
    this.discarded_post = post._id;
    setTimeout(() => {
      switch (type) {
        case 'post':
          this.posts = this.posts.filter((item) => item._id != post._id);
          break;
        case 'discover':
          this.discoverPosts = this.discoverPosts.filter(
            (item) => item._id != post._id
          );
          break;
      }
      this.discarded_post = '';
    }, 300);
  }
  async openOnboardModal() {
    // const modal = await this.modalController.create({
    //   component: OnboardingPage,
    // });
    // await modal.present();
    // await modal.onWillDismiss();
    // this.posts = undefined;
    // this.loading = true;
    // this.initializeConfig();
  }
}
