import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User, user, likes, Likes, Unlikes, unlikes } from './bucket';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _authService: AuthService) {
    this._authService.initBucket();
    this._authService
      .getUser()
      .toPromise()
      .then((res) => (this.me = res));
  }

  users: User[] = [];
  me: User;
  notListedUsers: string[] = [];

  async getUsers() {
    await this.getNotListedUsers();
    this.notListedUsers.push(this.me._id)
    this.users = await user.getAll({
      queryParams: { filter: { _id: { $nin: this.notListedUsers } } },
    });
    return this.users;
  }

  async getNotListedUsers(){
    await likes.getAll( {queryParams: { filter: { liked_user: this.me._id } }}).then(res => {
      res.forEach(el => {
        this.notListedUsers.push(el.user as string)
      })
    })
    await unlikes.getAll( {queryParams: { filter: { unliked_user: this.me._id } }}).then(res => {
      res.forEach(el => {
        this.notListedUsers.push(el.user as string)
      })
    })
  }
}
