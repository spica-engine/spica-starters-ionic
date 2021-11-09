import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  ActionSheetController,
  ModalController,
  Platform,
  ToastController,
} from '@ionic/angular';
import { PostCommentComponent } from '../post-comment/post-comment.component';
import { DataService } from './../../../services/data.service';
import { UserService } from './../../../services/user.service';
import { FollowingUsersComponent } from '../../chat/following-users/following-users.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsersModalComponent } from '../../users-modal/users-modal.component';
import {
  Post,
  User,
  liked_post,
  Message,
  message,
  post,
} from '../../../services/bucket';
import { environment } from 'src/app/social-media/services/environment';
import { PostService } from 'src/app/social-media/services/post.service';
import { TabsService } from 'src/app/social-media/tabs/tabs.service';
import { ChatService } from 'src/app/social-media/services/chat.service';
import { PostCreatePage } from 'src/app/social-media/pages/post-create/post-create.page';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  @Input() action: boolean = true;
  @Input() skeleton: boolean = false;
  @Input() userFollowable: boolean = false;
  @Input() imageClickable: boolean = true;
  @Input() with_router: boolean = true;

  @ViewChild('shareImageShadow', { static: false })
  shareImageShadow: ElementRef;

  @Output() liked: EventEmitter<string> = new EventEmitter<string>();
  @Output() deletedPost: EventEmitter<string> = new EventEmitter<string>();
  @Output() editedPost: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() rePorted: EventEmitter<Post> = new EventEmitter<Post>();

  @Output() followUsers: EventEmitter<Post> = new EventEmitter<Post>();

  private observer: IntersectionObserver;
  @ViewChild('media') media: ElementRef;
  mediaIsMuted = 'muted';
  isIntersecting: boolean = false;
  isImageLoaded: boolean = false;
  isModalPresented: boolean = false;

  percentage: number = 0;
  config: any;
  user: User;
  loading: boolean = false;
  follow_disabled: boolean = false;
  show_event_date: boolean = false;
  fullScreenImage: string;
  default_user_image = environment.user_img;

  constructor(
    private _dataService: DataService,
    private _userService: UserService,
    private _postService: PostService,
    public modalController: ModalController,
    public toastController: ToastController,
    public _tabService: TabsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private translateService: TranslateService,
    private _chatService: ChatService,
    private el: ElementRef,
    public platform: Platform
  ) {}

  async ngOnInit() {
    this.user = await this._userService.getActiveUser().toPromise();
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          this.toggleMedia(true);
          this.isIntersecting = true;
        } else {
          this.toggleMedia(false);
          this.isIntersecting = false;
        }
      },
      {
        threshold: 0.75,
      }
    );

    this.observer.observe(this.el.nativeElement as HTMLElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  handleEvent(e) {
    //console.log(e);
  }

  async like() {
    if (this.post['liked'] && this.post['liked_id']) {
      this.post['liked'] = false;
      this.post.like_count = this.post.like_count -= 1;
      liked_post.remove(this.post['liked_id']).then(() => {
        this._userService.userLikes = this._userService.userLikes.filter(
          (ul) => ul._id != this.post['liked_id']
        );
        delete this.post['liked_id'];
      });
    }
    if (!this.post['liked'] && !this.post['liked_id']) {
      this.post['liked'] = true;
      this.post.like_count = this.post.like_count += 1;
      let didUserLiked = this._userService.userLikes.filter(
        (ul) => ul.post._id == this.post._id
      );
      if (!didUserLiked.length) {
        liked_post
          .insert({ post: this.post, user: this.user as string })
          .then(async (data) => {
            this.post['liked_id'] = data._id;
            data.post = this.post;
            this._userService.userLikes.push(data);
            this.liked.emit(this.post._id);
          });
      } else {
        this.post['liked_id'] = didUserLiked[0]._id;
      }
    }
  }

  async sharePost() {
    let toast = await this.toastController.create({
      header: this.translateService.instant('shared-post'),
      duration: 3000,
      cssClass: 'toast-custom-class',
    });
    toast.present();
  }

  async sendPost() {
    if (!this.isModalPresented) {
      this.isModalPresented = true;
      const modal = await this.modalController.create({
        component: FollowingUsersComponent,
        componentProps: {
          addComment: true,
        },
      });

      await modal.present();
      const { data } = (await modal.onWillDismiss()) as {
        data: { users: User[]; dm_comment };
      };
      this.isModalPresented = false;
      if (data.users.length) {
        this.loading = true;
        let name;
        if (data.users.length == 1) name = data.users[0].username;
        else name = 'Chat Group ' + Math.round(Math.random() * 100);
        data.users.unshift(this.user);
        let chatExists = await this._chatService.isChatExists(data.users);
        if (!chatExists.result) {
          this._chatService
            .createChat({
              name: name,
              is_group: data.users.length > 2,
              last_active: data.users.map((user) => {
                return { user: user._id };
              }) as [],
            })
            .then(async (newChat) => {
              await this.messageOperation(newChat._id, data.dm_comment);
              this._dataService
                .setOnline(
                  'chat',
                  {
                    chat: newChat._id,
                    last_message: data.dm_comment || 'send a post',
                  },
                  this.user._id
                )
                .toPromise();
            });
        } else {
          chatExists.chat['last_active'] = chatExists.chat['last_active'].map(
            (item) => {
              item.user = item.user._id || item.user;
              if (
                !chatExists.chat['is_group'] &&
                item.user == this.user._id &&
                item.status == 'deleted'
              )
                item.status = 'active';
              return item;
            }
          );
          await this.messageOperation(chatExists.chat['_id'], data.dm_comment);
          await this._dataService
            .setOnline(
              'chat',
              {
                chat: chatExists.chat['_id'],
                last_message: data.dm_comment || 'send a post',
              },
              this.user._id
            )
            .toPromise();
        }
        this.loading = false;
      }
    }
  }

  async messageOperation(chatGroup, dm) {
    await this.sendDm({
      chat: chatGroup,
      owner: this.user as string,
      post: this.post._id as Post,
    });
    if (dm) {
      await this.sendDm({
        chat: chatGroup,
        owner: this.user as string,
        message: dm,
      });
    }
  }

  async sendDm(obj: Message) {
    return message.insert(obj);
  }

  async showActions() {
    let action_buttons = [
      {
        text: this.translateService.instant('share-post'),
        handler: () => {
          this.sharePost();
        },
      },
      {
        text: this.translateService.instant('copy-link'),
        handler: () => {
          this.copyLink();
        },
      },
      {
        text: this.translateService.instant('cancel'),
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      },
    ];
    if (this.post.user._id != this.user._id) {
      action_buttons.splice(action_buttons.length - 1, 0, {
        text: this.translateService.instant('report'),
        handler: () => {
          this.reportPost();
        },
      });
    } else {
      action_buttons.splice(action_buttons.length - 1, 0, {
        text: this.translateService.instant('edit-post'),
        handler: () => {
          this.editPost();
        },
      });
      action_buttons.splice(action_buttons.length - 1, 0, {
        text: this.translateService.instant('delete-post'),
        handler: () => {
          this.deletePost();
        },
      });
    }

    let actionSheet = await this.actionSheetCtrl.create({
      buttons: action_buttons,
    });

    actionSheet.present();
  }

  async copyLink() {
    let toast = await this.toastController.create({
      header: this.translateService.instant('copied'),
      duration: 3000,
      cssClass: 'toast-custom-class',
    });
    toast.present();
  }

  async deletePost() {
    this.deletedPost.emit(this.post._id);
  }

  async editPost() {
    if (!this.isModalPresented) {
      this.isModalPresented = true;
      const modal = await this.modalController.create({
        component: PostCreatePage,
        swipeToClose: true,
        componentProps: {
          user: this.user,
          post: this.post,
        },
      });
      await modal.present();
      let dismissData = await modal.onDidDismiss();
      this.isModalPresented = false;
      if (dismissData.data.refresh && dismissData.data.editpost) {
        this.editedPost.emit(this.post);
        await post.update(this.post as any)
      } else this.post = JSON.parse(JSON.stringify(dismissData.data.editpost));
    }
  }

  clickedMentions(event) {
    this.router.navigate([event], { relativeTo: this.activatedRoute });
  }

  clickedImage(mimeType, image) {
    if (mimeType.includes('video') && this.imageClickable) {
      this.mediaIsMuted = this.mediaIsMuted == '' ? 'muted' : '';
    } else if (mimeType.includes('image') && this.imageClickable) {
      this._tabService.backDropImage = image;
    }
  }
  async openLikedModal() {
    if (!this.isModalPresented) {
      this.isModalPresented = true;
      const modal = await this.modalController.create({
        component: UsersModalComponent,
        swipeToClose: true,
        componentProps: {
          post: this.post,
        },
      });
      await modal.present();
      let dismissData = await modal.onDidDismiss();
      this.isModalPresented = false;
      if (dismissData.data['route']) {
        this.router.navigate([dismissData.data['route']], {
          relativeTo: this.activatedRoute,
        });
      }
      if (dismissData.data['is_followed']) {
        this.followUsers.emit();
      }
    }
  }

  async showComments() {
    if (!this.isModalPresented) {
      this.isModalPresented = true;
      const modal = await this.modalController.create({
        component: PostCommentComponent,
        swipeToClose: true,
        componentProps: {
          post: this.post,
        },
      });

      await modal.present();
      const { data } = await modal.onWillDismiss();
      this.isModalPresented = false;
      if (data?.route) {
        this.router.navigate([`${data.route}`, data.param], {
          relativeTo: this.activatedRoute,
        });
      }
    }
  }

  toggleMedia(is_played) {
    if (this.media) {
      is_played
        ? this.media.nativeElement.play()
        : this.media.nativeElement.pause();
    }
  }
  async reportPost() {
    this.loading = true;
    this._postService.reportPost(this.post).then(async () => {
      this.rePorted.emit(this.post);
      this.loading = false;
      let toast = await this.toastController.create({
        header: this.translateService.instant('reported-post'),
        duration: 3000,
        cssClass: 'toast-custom-class',
      });
      toast.present();
    });
  }
}
