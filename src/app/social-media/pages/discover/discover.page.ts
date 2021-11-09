import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hashtag, post, Post } from './../../services/bucket';
import { PostService } from './../../services/post.service';
import { DataService } from './../../services/data.service';
import { IonContent, IonInfiniteScroll, IonRefresher } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HashtagService } from '../../services/hashtag.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  constructor(
    private postService: PostService,
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _hashtagService: HashtagService,
    private _userservice: UserService
  ) {}
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonRefresher) ionRefresher: IonRefresher;
  @ViewChild(IonContent, { read: IonContent, static: false })
  private content: IonContent;

  posts: Post[] = [];
  refresh = new BehaviorSubject(null);
  loading: boolean = true;
  showMentions: boolean = true;
  hashtagId: string;
  scroll_params = {
    skip: 0,
    limit: 9,
  };
  hasTags: [] = [];

  searchedText: string;
  mentionText: string;
  showedSegment = 0;
  discarded_post: string = '';

  async ngOnInit() {
    this.showMentions = false;
    this.hashtagId = await this.activatedRoute.snapshot.paramMap.get('search');
    if (this.hashtagId) {
      this.posts = await this.postService.getPosts({
        filter: { hashtags: { $in: [this.hashtagId] } },
        sort: { _id: -1 },
      });
      this.searchedText =
        '#' +
        this.posts[0].hashtags.filter((i) => i._id == this.hashtagId)[0]
          .hashtag;
      this.loading = false;
    } else {
      this.content.scrollToTop(0);
      this.infiniteScroll.disabled = true;
      this.setInitialSettings();
      this.getPosts();
    }
  }

  getPosts() {
    let subs: Promise<Post[]>;
    if (this.hashtagId) {
      subs = this.postService.getPosts({
        filter: {
          hashtags: { $in: [this.hashtagId] },
        },
        sort: { _id: -1 },
        skip: this.scroll_params.skip,
        limit: this.scroll_params.limit,
      });
    } else if (this.searchedText && this.searchedText != '') {
      subs = this.postService.getPosts({
        filter: {
          'hashtags._id': { $ne: [] },
          'hashtags.hashtag': { $regex: this.searchedText, $options: 'i' },
        },
        sort: { _id: -1 },
        skip: this.scroll_params.skip,
        limit: this.scroll_params.limit,
      });
    } else {
      subs = this.postService
        .getExplorePosts(this.scroll_params.limit)
        .toPromise();
    }
    subs.then((data) => {
      this.loading = false;
      this.posts = this.posts.concat(data);
      this.ionRefresher?.complete();
      this.infiniteScroll?.complete();
      if (this.infiniteScroll) this.infiniteScroll.disabled = false;
    });
  }

  loadData() {
    this.scroll_params.skip =
      this.scroll_params.limit + this.scroll_params.skip;
    this.getPosts();
  }

  setInitialSettings() {
    this.loading = true;
    this.posts = [];
    this.scroll_params.skip = 0;
  }

  goToUser(user) {
    this.router.navigate([`profile/${user._id}`], {
      relativeTo: this.activatedRoute,
    });
  }
  async searchPostsWithTag(tag: Hashtag) {
    this.showMentions = false;
    this.hashtagId = tag._id;
    this.setInitialSettings();
    this.getPosts();
    this.searchedText = '#' + tag.hashtag;
  }
  deletedPost(event) {
    this.loading = true;
    this.discarded_post = event;
    post.remove(event).then((_) => {
      this.posts = this.posts.filter((item) => item._id != event);
      this.loading = false;
      this.content.scrollToTop(0);
      this.discarded_post = '';
    });
  }
  editedPost(event) {
    let index = this.posts.findIndex((i) => i._id == event._id);
    if (index > 0) this.posts[index] = event;
    this.posts = JSON.parse(JSON.stringify(this.posts));
    this.content.scrollToTop(0);
  }

  async checkTagCreate(text) {
    this.hasTags = await this._hashtagService.checkTagCreate(
      text,
      this.hasTags
    );
  }

  getPostByHashTag(event) {
    if (this.searchedText == '') {
      this.loading = true;
      this.mentionText = '';
      this.hashtagId = undefined;
      this.scroll_params.skip = 0;
      this.getPosts();
      this.showMentions = false;
      this.searchedText = undefined;
      this.showedSegment = 0;

      return;
    }
    this.showMentions = true;
    if (this.searchedText.substr(0, 1) == '#') {
      this.hashtagId = undefined;
      this.mentionText = event;
      this.setInitialSettings();
      this.getPosts();
      this.showedSegment = 1;
    } else {
      this.mentionText = event.substr(0, 1) == '@' ? event : '@' + event;
    }
  }
  doRefresh() {
    this.setInitialSettings();
    this.loading = false;
    this.getPosts();
  }
  segmentChanged(event) {
    this.showedSegment = event;
    let text = '';
    switch (event) {
      case 0:
        text =
          this.mentionText.substr(0, 1) == '#'
            ? this.mentionText.substr(1)
            : this.mentionText;
        break;
      case 1:
        text =
          this.mentionText.substr(0, 1) == '@'
            ? '#' + this.mentionText.substr(1)
            : this.mentionText;
        break;
    }
    this.searchedText = text;
    this.getPostByHashTag(text);
  }
  reportedPost(post) {
    this.discarded_post = post._id;
    setTimeout(() => {
      this.posts = this.posts.filter((item) => item._id != post._id);
      this.discarded_post = '';
    }, 300);
  }
}
