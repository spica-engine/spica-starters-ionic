import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import {
  Blocked_User,
  Follow,
  Liked_Post,
  User,
  Waiting_Request,
  waiting_request,
  user,
  liked_post,
  follow,
  blocked_user,
  reported_post,
} from '../services/bucket';
import { DataService } from './data.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  me: User;
  userLikes: Liked_Post[];
  followingUsers: User[] = [];
  followerUsers: User[] = [];
  sended_requests: Waiting_Request[] = [];
  user_id: string;
  $userSubject: Subject<User> = new Subject();
  $userRequest: Promise<User>;
  blockedUsers: Blocked_User[];
  reportedPosts;

  constructor(
    private _authService: AuthService
  ) {}
  getActiveUser(refresh: boolean = false): Observable<User> {
    let result;
    let identity_id = this.getIdentityId();
    if (this.me) {
      result = of(this.me);
    }

    if (refresh || !this.$userRequest) {
      this.$userRequest = undefined;
      this.$userRequest = user
        .getAll({
          queryParams: {
            filter: { identity: identity_id },
          },
        })
        .then((res) => {
          this.me = res[0];
          if (this.me) localStorage.setItem('socialmedia_user_id', this.me._id);
        })
        .then(() => this.updateUserLikes())
        .then(() => this.getBlockedUsers())
        .then(() => this.getReportedPosts())
        .then(() => this.updateFollowerAndFollowings())
        .then(() => this.me);
     
      this.$userRequest.then(
        (result) => {
          this.$userSubject.next(result);
        },
        (error) => {
          this.$userSubject.next(null);
       }
     );
    }
    return result || this.$userSubject;
  }
  getUserById(id) {
    return user.get(id);
  }
  getUserByIdentity(id) {
    return user.getAll({ queryParams: { filter: { identity: id } } });
  }
  getUserByUsername(username) {
    if (username[0] == '@') username = username.substring(1);
    return user.getAll({ queryParams: { filter: { username: username } } });
  }
  getUserId() {
    if (this.getIdentityId()) {
      return (this.user_id = this.user_id
        ? this.user_id
        : localStorage.getItem('socialmedia_user_id'));
    } else return null;
  }

  getIdentityId() {
    return this._authService.getIdentityId();
  }

  updateProfilePhoto(photoUrl): Promise<User> {
    return user.patch({ _id: this.me._id, thumbnail: photoUrl });
  }

  updateProfile(updatedUser) {
    return user.update(updatedUser);
  }

  updateUserLikes() {
    if (this.me)
      liked_post
        .getAll({
          queryParams: { filter: { user: this.me._id }, relation: 'post' },
        })
        .then((data) => (this.userLikes = data));
  }
  updateFollowerAndFollowings() {
    follow
      .getAll({
        queryParams: {
          filter: {
            $or: [{ follower: this.me._id }, { following: this.me._id }],
          },
          relation: true,
        },
      })
      .then((data: Follow[]) => {
        data.forEach((item) => {
          if (item.following['_id'] == this.me._id)
            this.followerUsers.push(item.follower);
          if (item.follower['_id'] == this.me._id)
            this.followingUsers.push(item.following);
        });
      });
  }

  followUser(user: User) {
    return follow
      .insert({ following: user, follower: this.me._id as any })
      .then((data) => {
        this.followingUsers.push(user);
        return data;
      })
      .then((data) => data);
  }

  unFollowUser(followEntry: Follow) {
    followEntry.following ||= followEntry['user']._id;
    return follow.remove(followEntry._id).then(() => {
      this.followingUsers = this.followingUsers.filter(
        (u) => (followEntry.following as any) != u._id
      );
    });
  }

  isFollowingUser(user: User) {
    return this.followingUsers.filter((u) => u._id == user._id).length
      ? true
      : false;
  }
  getWaitingRequest(user: User): Promise<Waiting_Request[]> {
    let findedItem = this.sended_requests.filter(
      (item) => item.sender == this.me._id && item.reciever == user._id
    )[0];
    if (findedItem) return of([findedItem]).toPromise();
    return waiting_request
      .getAll({
        queryParams: { filter: { sender: this.me._id, reciever: user._id } },
      })
      .then((data) => (data[0] ? this.sended_requests.push(data[0]) : ''))
      .then((data) => data[0]);
  }
  sendRequest(user: User) {
    return waiting_request.insert({
      sender: this.me as any,
      reciever: user as any,
    });
  }
  deleteRequest(id) {
    return waiting_request.remove(id);
  }
  getAllWaitingRequests() {
    return waiting_request.getAll({
      queryParams: { filter: { reciever: this.me._id }, relation: 'sender' },
    });
  }
  getAllSendedRequests() {
    return waiting_request.getAll({
      queryParams: { filter: { sender: this.me } },
    });
  }

  async receiveRequest(user, request_id) {
    await this.deleteRequest(request_id);
    await follow.insert({
      following: this.me,
      follower: user,
    });
    this.followerUsers.push(user);
  }
  getBlockedUsers() {
    return this.blockedUsers
      ? this.blockedUsers
      : blocked_user
          .getAll({
            queryParams: {
              filter: { blocking: this.me._id },
              relation: 'blocked',
            },
          })
          .then((data) => (this.blockedUsers = data));
  }
  blockUser(user) {
    return blocked_user
      .insert({
        blocking: this.me as any,
        blocked: user,
      })
      .then((data) => {
        data.blocked = user;
        this.blockedUsers.push(data);
      });
  }
  unBlockUser(entry) {
    return blocked_user
      .remove(entry._id)
      .then(
        () =>
          (this.blockedUsers = this.blockedUsers.filter(
            (item) => item._id != entry._id
          ))
      );
  }
  getReportedPosts() {
    return this.reportedPosts
      ? this.reportedPosts
      : reported_post
          .getAll({
            queryParams: { filter: { user: this.me._id } },
          })
          .then((data) => (this.reportedPosts = data.map((item) => item.post)));
  }
  checkBlockedMe(user) {
    return blocked_user.getAll({
      queryParams: { filter: { blocked: this.me._id, blocking: user._id } },
    });
  }
}
