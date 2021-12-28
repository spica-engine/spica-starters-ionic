import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Chat, User, chat, user } from './bucket';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chatGroups: Chat[] = [];
  $chatGroups: BehaviorSubject<Chat[]> = new BehaviorSubject([]);
  $unreadMessageCount: BehaviorSubject<number> = new BehaviorSubject(0);
  cachedUsers: User[] = [];
  me: User;

  constructor(private _authService: AuthService) {
    this._authService.initBucket();
  }

  async initialize() {
    this.me = await this._authService.getUser().toPromise();
    
    chat.realtime
      .getAll({
        filter: {
          informations: { $elemMatch: { user: this.me._id, status: 'active' } },
        },
      })
      .pipe(
        map((chats: Chat[]) => {
          chats = chats.map((chat: Chat) => {
            let userObject = chat.informations.filter(
              (user) =>
                user.user == this.me._id || user.user['_id'] == this.me._id
            )[0];
            chat['new_message_count'] = userObject.unread_messages_count;
            return chat;
          });
          return chats;
        }),
        map((chats: Chat[]) =>
          chats.sort((a, b) => {
            if (b['last_message_time'] && a['last_message_time'])
              return (
                new Date(b['last_message_time']).getTime() -
                new Date(a['last_message_time']).getTime()
              );
            return -1;
          })
        ),
        switchMap((chats: Chat[]) => {
          let nonCachedUsers = [];
          chats.forEach((chat: Chat) => {
            nonCachedUsers = nonCachedUsers.concat(
              chat.informations.filter(
                (item) =>
                  !this.cachedUsers.some(
                    (cu) => cu._id == item.user || cu._id == item.user['_id']
                  )
              )
            );
          });
          let $newUsers =
            nonCachedUsers.length > 0
              ? user.getAll({
                  queryParams: {
                    filter: {
                      _id: { $in: nonCachedUsers.map((item) => item.user) },
                    },
                  },
                })
              : of([]).toPromise();
          return $newUsers.then((users) => {
            this.cachedUsers = this.cachedUsers.concat(users);
            chats = chats.map((chat: Chat) => {
              if (!chat.informations[0].user['_id'])
                chat.informations.forEach(
                  (item) =>
                    (item.user = this.cachedUsers.find(
                      (cu) => cu._id == item.user
                    ) as any)
                );
              return chat;
            });
            return chats;
          });
        })
      )
      .subscribe((data) => {
        this.chatGroups = data.map((chat: Chat) => {
          if (!chat.is_group) {
            chat.name =
              chat.informations[1].user['_id'] == this.me._id
                ? `${chat.informations[0].user['username']}`
                : `${chat.informations[1].user['username']}`;

            chat['image'] =
              chat.informations[1].user['_id'] == this.me._id
                ? chat.informations[0].user['profile_photo']
                : chat.informations[1].user['profile_photo'];
          }
          return chat;
        });
        let unread_messages_count = 0;
        this.chatGroups.forEach((chat) => {
          let userLastActive = chat.informations.filter(
            (la) => la.user['_id'] == this.me._id.toString()
          )[0];
          unread_messages_count += userLastActive.unread_messages_count;
        });
        this.$unreadMessageCount.next(unread_messages_count);
        this.$chatGroups.next(this.chatGroups);
      });
  }

  getChats() {
    return this.$chatGroups;
  }

  getUnreadMessageCount() {
    return this.$unreadMessageCount;
  }

  getChatByUserWithMe(id) {
    return chat
      .getAll({
        queryParams: {
          filter: {
            $and: [
              { informations: { $elemMatch: { user: id } } },
              { informations: { $elemMatch: { user: this.me._id } } },
              { informations: { $size: 2 } },
              { is_group: false },
            ],
          },
        },
      })
      .then(async (data: Chat[]) => {
        if (data[0])
          for (let item of data[0].informations) {
            if (item.user == this.me._id) item.user = this.me as any;
            else if (this.cachedUsers.some((cu) => cu._id == item.user)) {
              item.user = this.cachedUsers.find(
                (cu) => cu._id == item.user
              ) as any;
            } else {
              item.user = await user.get(item.user as string);
              this.cachedUsers.push(item.user);
            }
          }
        return data;
      });
  }
  createChat(chatGroup: Chat) {
    return chat.insert(chatGroup);
  }
  async isChatExists(users: User[]) {
    let result = { result: false, chat: {} };
    let usersString = users
      .map((u) => u._id)
      .sort()
      .join(',');
    this.chatGroups.forEach((cg: Chat) => {
      let chatGroupsString = cg.informations
        .map((item) => item.user['_id'] || item.user)
        .sort()
        .join(',');
      if (usersString == chatGroupsString) {
        result = { result: true, chat: cg };
      }
    });
    if (!result.result && users.length == 2) {
      let other_user = users.filter(
        (item) => (item._id || item) != this.me._id
      )[0]._id;
      let deletedChat = await this.getChatByUserWithMe(other_user);
      if (deletedChat[0]) result = { result: true, chat: deletedChat[0] };
    }
    return result;
  }
}
