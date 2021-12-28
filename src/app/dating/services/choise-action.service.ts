import { Injectable } from '@angular/core';
import { likes, unlikes } from './bucket';

@Injectable({
  providedIn: 'root'
})
export class ChoiseActionService {

  constructor() { }

  insertChoice(value, user, me) {
    let data = {
      user: user,
    };
    if (value == 'like') {
      data['liked_user'] = me;
      data['like_type'] = 'like';
      likes.insert(data);
    } else {
      data['unliked_user'] = me;
      data['primary'] = 'unlikes';
      unlikes.insert(data);
    }
  }
}
