import { Injectable } from '@angular/core';
import { Post, post, reported_post } from '../services/bucket';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(
    private _dataService: DataService,
    private _userService: UserService
  ) {}

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
        });
        return data;
      });
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
  getExplorePosts(limit: number) {
    return this._dataService.getExplorePosts(limit).pipe(
      switchMap((data: any) => {
        return this.getPosts({
          relation: ['post.user', 'post.tags', 'post.hashtags'],
          filter: { _id: { $in: data.posts.map((item) => item._id) } },
          sort: { event_date: 1 },
        });
      })
    );
  }
  // getTrendingPosts(skip, limit, user_id){
  //   return this._dataService.getTrendingPosts(skip, limit, user_id).pipe(
  //     switchMap((data: any) => {
  //       return this.getPosts({
  //         relation: ['post.user', 'post.tags', 'post.hashtags'],
  //         filter: { _id: { $in: data.posts.map((item) => item._id) } },
  //       });
  //     })
  //   );
  // }

  reportPost(post) {
    return reported_post
      .insert({
        user: this._userService.me as any,
        post: post,
      })
      .then((data) => this._userService.reportedPosts.push(data.post));
  }
}
