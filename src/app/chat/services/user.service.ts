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
  constructor(private _authService: AuthService) {
    this.initializeOrm();
  }
  getActiveUser(): Promise<User> {
    let result: Promise<User>;
    let identity_id = this.getIdentityId();
    if (this.me) {
      result = of(this.me).toPromise();
    } else {
      this.initializeOrm();
      result = user
        .getAll({
          queryParams: {
            filter: { identity_id: identity_id },
            relation: 'friends',
          },
        })
        .then((data) => {
          this.me = data[0];
          return data[0];
        });
    }

    return result;
  }
  getUserById(id, relation) {
    return user.get(id, { queryParams: { relation: relation } });
  }
  getUserByIdentity(id) {
    return user.getAll({ queryParams: { filter: { identity_id: id } } });
  }
  getUserByUsername(username) {
    return user.getAll({ queryParams: { filter: { username: username } } });
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
  initializeOrm() {
    initialize({ identity: localStorage.getItem('chat_spica_token') });
  }
  logOut() {
    localStorage.removeItem('chat_spica_token');
  }
}
