import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {  Post, post, reported_post } from '../services/bucket';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { DataService } from './data.service';
// import { shuffle } from "../utils/helpers";
@Injectable({
  providedIn: 'root',
})
export class PostService {
  // bucketId: string = environment.buckets.postsBucket;
  posts: Post[] = [];
  seenPosts: Post[] = [];
  customNotifications;

  constructor(
    private _dataService: DataService,
    private _userService: UserService,
  ) {}

  calculateFullTime(post: Post) {
    post['leftTime'] = Math.round(
      (new Date(post.event_date).getTime() - new Date().getTime()) / 1000
    );
    return post;
  }

  calculateLeftTime(post: Post) {
    post['fullTime'] = Math.round(
      (new Date(post.event_date).getTime() -
        new Date(post.created_at).getTime()) /
        1000
    );
    return post;
  }

  markAsSeen(post: Post) {
    if (
      post._id &&
      !this.seenPosts.some((seenPost) => seenPost._id == post._id)
    ) {
      this.seenPosts.push(post);
    }
  }

  getPosts(filterParams: Object = {}, cacheResults: boolean = false) {
    filterParams['relation'] = [
      ...(filterParams['relation'] || []),
      ...['user', 'hashtags', 'tags'],
    ];
    filterParams = this.confFilterParam(filterParams);

    return post
      .getAll({
        queryParams: filterParams,
      })
      .then((data: Post[]) => {
        data.map((post) => {
          let index_liked = this._userService.userLikes.findIndex(
            (liked) => liked.post._id == post._id
          );
          if (index_liked != -1) {
            post['liked_id'] = this._userService.userLikes[index_liked]._id;
            post['liked'] = true;
          }
          return post; 
        })
        return data
      })
      .then((res) => {
        if (cacheResults) {
          res = res.filter(
            (post: Post) => !this.posts.some((p) => p._id == post._id)
          );
          // res = shuffle(res);
          this.posts = this.posts.concat(res);
        }
      }).then(()=>this.posts)
  }
  confFilterParam(filterParams) {
    let reportedPosts = this._userService.reportedPosts;
    if (filterParams['filter']['_id'])
      Object.assign(filterParams['filter']['_id'], {
        $nin: reportedPosts,
      });
    else
      Object.assign(filterParams['filter'], {
        _id: { $nin: reportedPosts },
      });
    return filterParams;
  }
  getExplorePosts(limit: number, user_id: string) {
    return this._dataService.getExplorePosts(limit, user_id).pipe(
      switchMap((data: any) => {
         return this.getPosts({
          relation: ['post.user', 'post.tags', 'post.hashtags'],
          filter: { _id: { $in: data.posts.map((item) => item._id) } },
          sort: { event_date: 1 },
        });
      })
    );
  }
  getTrendingPosts(skip, limit, user_id){
    return this._dataService.getTrendingPosts(skip, limit, user_id).pipe(
      switchMap((data: any) => {
        return this.getPosts({
          relation: ['post.user', 'post.tags', 'post.hashtags'],
          filter: { _id: { $in: data.posts.map((item) => item._id) } },
        });
      })
    );
  }

  deletePost(id) {
    this.posts = this.posts.filter((post) => post._id != id);
    return post.remove(id);
  }
  editPost(post) {
    let index = this.posts.findIndex((item) => item._id == post._id);
    if (index > -1) this.posts[index] = post;
  }
  getExploreUsers(skip, limit) {
    return this._dataService.getExploreUsers(skip, limit);
  }
  clearCache() {
    this.posts = [];
  }
  reportPost(post) {
    return reported_post
      .insert({
        user: this._userService.me as any,
        post: post,
      })
      .then((data) => this._userService.reportedPosts.push(data.post));
  }
}
