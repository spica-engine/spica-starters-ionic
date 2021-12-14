import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User, user, initialize } from '../services/bucket';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  me: User;
  followingUsers: User[] = [];
  user_id: string;
  savedJobIds = [];
  constructor(private _authService: AuthService) {
    this._authService.initBucket();
    this._authService.initBucket();
  }
  getActiveUser(): Promise<User> {
    let result: Promise<User>;
    let identity_id = this.getIdentityId();
    if (this.me) {
      result = of(this.me).toPromise();
    } else {
      result = user
        .getAll({
          queryParams: {
            filter: { identity: identity_id },
          },
        })
        .then((data) => {
          this.me = data[0];
          return data[0];
        })
    }

    return result;
  }
  getUserById(id, relation) {
    return user.get(id, { queryParams: { relation: relation } });
  }
  getUserByIdentity(id) {
    return user.getAll({ queryParams: { filter: { identity: id } } });
  }
  getUserByUsername(username) {
    return user.getAll({ queryParams: { filter: { username: username } } });
  }

  getIdentityId() {
    return this._authService.getActiveToken();
  }

  updateProfile(updatedUser) {
    return user.update(updatedUser);
  }
}
