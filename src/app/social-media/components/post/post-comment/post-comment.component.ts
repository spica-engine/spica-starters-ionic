import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/social-media/services/data.service';
import { environment } from 'src/app/social-media/services/environment';
import { HashtagService } from 'src/app/social-media/services/hashtag.service';
import { UserService } from 'src/app/social-media/services/user.service';
import {
  Comment,
  Hashtag,
  Post,
  User,
  post,
  comment,
} from '../../../services/bucket';

@Component({
  selector: 'post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { read: IonContent, static: false })
  private content: IonContent;
  post: Post;
  comments: Comment[] = [];
  my_comment: string;
  user: User;
  deleted_row;
  default_user_image = environment.user_img;
  searchedText: string = null;
  lastCaretPosition: number;
  scroll_params = {
    skip: 0,
    limit: 20,
  };
  tags: User[] = [];
  hasTags: Hashtag[] = [];

  loadings = {
    main: true,
    deleteComment: false,
  };
  constructor(
    private modalController: ModalController,
    private _dataService: DataService,
    private _userService: UserService,
    private _hashtagService: HashtagService
  ) {}

  ngOnInit() {
    console.log(this.post);
    this._userService
      .getActiveUser()
      .toPromise()
      .then((data) => (this.user = data));
    this.getComments();
  }
  ionViewWillEnter() {
    this.infiniteScroll.disabled = true;
  }
  close(withroute = null) {
    this.modalController.dismiss(withroute);
  }
  getComments() {
    comment
      .getAll({
        queryParams: {
          filter: { post: this.post._id },
          relation: true,
          sort: { _id: -1 },
          limit: this.scroll_params.limit,
          skip: this.scroll_params.skip,
        },
      })
      .then((data) => {
        this.comments = this.comments.concat(data);
        this.comments = this.comments.sort((a, b) =>
          a['_id'] > b['_id'] ? 1 : b['_id'] > a['_id'] ? -1 : 0
        );
        this.loadings.main = false;
        this.infiniteScroll.complete();
        if (this.scroll_params.skip == 0)
          setTimeout(() => {
            this.content.scrollToBottom();
          }, 100);

        if (data.length >= this.scroll_params.limit) {
          this.infiniteScroll.disabled = false;
        } else this.infiniteScroll.disabled = true;
      });
  }
  async sendComment() {
    if (this.my_comment && this.my_comment != '') {
      await this.checkTagCreate();
      let comment_data = {
        post: this.post as any,
        user: this.user as any,
        comment: this.my_comment,
        tags: this.tags as any,
        hastags: this.hasTags as any,
      };

      this.post.comment_count += 1;
      comment.insert(comment_data).then((res) => {
        comment_data['_id'] = res._id;
        comment_data['date'] = res.date;
        this.tags = [];
        this.hasTags = [];
        this.comments.push(comment_data);
        setTimeout(() => {
          this.content.scrollToBottom();
        }, 100);
      });
      this.my_comment = '';
    }
  }
  updatePost(update_post: Post) {
    post.update(update_post as any);
  }
  deleteComment(id) {
    this.deleted_row = id;
    let index = this.comments.findIndex((item) => item._id == id);
    this.comments.splice(index, 1);
    this.post.comment_count -= 1;
    comment.remove(id).then();
  }

  mentioning($event) {
    this.searchedText = $event.text;
    this.lastCaretPosition = $event.caret + 1;
  }

  mentionUser(user: User) {
    this.searchedText = null;
    this.tags.push(user);
    let lastMention = this.my_comment.substr(0, this.lastCaretPosition);
    let lastMentionStartsAt = lastMention.lastIndexOf('@');
    this.my_comment =
      this.my_comment.substr(0, lastMentionStartsAt) +
      '@' +
      user.username +
      this.my_comment.substr(this.lastCaretPosition);
  }

  hashtagSelected(hashtag: Hashtag) {
    this.searchedText = null;
    this.hasTags.push(hashtag);
    let lastMention = this.my_comment.substr(0, this.lastCaretPosition);
    let lastMentionStartsAt = lastMention.lastIndexOf('#');
    this.my_comment =
      this.my_comment.substr(0, lastMentionStartsAt) +
      '#' +
      hashtag.hashtag +
      this.my_comment.substr(this.lastCaretPosition);
  }
  stopped() {
    this.searchedText = null;
  }
  setRoute(route, param) {
    this.close({ route, param });
  }
  clickMention(event) {
    let newRoute = event.split('/');
    this.setRoute(newRoute[0], newRoute[1]);
  }

  async checkTagCreate() {
    this.hasTags = await this._hashtagService.checkTagCreate(
      this.my_comment,
      this.hasTags
    );
  }
  loadData() {
    this.scroll_params.skip =
      this.scroll_params.limit + this.scroll_params.skip;
    this.getComments();
  }
}
