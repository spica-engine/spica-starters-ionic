import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from './../../../services/user.service';
// import { FollowingUsersComponent } from "src/app/components/chat/following-users/following-users.component";
import { Router } from '@angular/router';
import { Chat, User, chat } from '../../../services/bucket';
import { Subscription } from 'rxjs';
import { environment } from 'src/app/social-media/services/environment';
import { FollowingUsersComponent } from 'src/app/social-media/components/chat/following-users/following-users.component';
import { ChatService } from 'src/app/social-media/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage {
  chats: Chat[] = [];
  searchedChats: Chat[] = [];
  user: User;
  $chats: Subscription;
  singleChats = [];
  selectedChats = [];
  user_img_empty = environment.user_img;
  searchedText: string;
  open_to_select: boolean = false;

  constructor(
    private _userService: UserService,
    private _modalController: ModalController,
    private _chatService: ChatService,
    private _router: Router
  ) {}

  async ionViewWillEnter() {
    this.user = await this._userService.getActiveUser().toPromise();
    this.getChats();
  }

  ionViewWillLeave() {
    this.$chats.unsubscribe();
  }

  getChats() {
    this.$chats = this._chatService.getChats().subscribe((data) => {
      this.chats = data;
      this.chats.forEach((item) => {
        if (!item.is_group) {
          let last_active_user_date = item.last_active.filter(
            (active) => active.user['_id'] != this.user._id
          )[0].date;
          item['seen'] =
            item['new_message_count'] == 0 &&
            item.last_message_owner == this.user._id &&
            new Date(item.last_message_time).getTime() <
              new Date(last_active_user_date).getTime();
        }
        if (!this.searchedText) this.searchedChats = [...this.chats];
        else this.getChatBySearch();
      });
    });
  }

  async createNewGroup() {
    const modal = await this._modalController.create({
      component: FollowingUsersComponent,
    });

    await modal.present();
    const { data } = (await modal.onWillDismiss()) as {
      data: { users: User[] };
    };
    if (data.users.length) {
      let name;
      if (data.users.length == 1) name = data.users[0].username;
      else name = `${data.users[0].username}, ${data.users[1].username}...`;
      data.users.unshift(this.user);
      let chatExists = await this._chatService.isChatExists(data.users);
      if (!chatExists.result) {
        if (data.users.length == 2) {
          let opponent = data.users.find((user) => this.user._id != user._id);
          this.navigateToChat(opponent);
        } else
          this._chatService.createChat({
            name: name,
            is_group: data.users.length > 2,
            last_active: data.users.map((user) => {
              return { user: user._id };
            }) as [],
          });
      } else {
        this._router.navigate([
          `/social-media/tabs/home/chats/${chatExists.chat['_id']}`,
          { chat: JSON.stringify(chatExists.chat) },
        ],{replaceUrl:true});
      }
    }
  }

  navigateToChat(user) {
    this._router.navigate([
      `/social-media/tabs/home/chats/${undefined}`,
      { user: JSON.stringify(user) },
    ],{replaceUrl:true});
  }

  async deleteChats() {
    let selectedChats = this.chats.filter((cg) =>
      this.selectedChats.some((sc) => cg._id == sc)
    );
    for (let chat_item of selectedChats) {
      chat_item.last_active.filter(
        (la) => la.user['_id'] == this.user._id
      )[0].status = 'deleted';

      chat_item.last_active = chat_item.last_active.map((item) => {
        item.user = item.user['_id'];
        return item;
      });
      console.log('chat :', JSON.parse(JSON.stringify(chat)));
      if (
        chat_item.is_group &&
        !chat_item.last_active.filter(
          (item) =>
            item.status == 'active' &&
            chat_item.managers.includes(item.user as any)
        )[0]
      ) {
        chat_item.managers = [
          chat_item.last_active.filter((item) => item.status == 'active')[0]
            .user as any,
        ];
      }
      chat.update(chat_item as any).then();
      this.chats = this.chats.filter(
        (chatGroup: Chat) => chatGroup._id != chat_item._id
      );
      this.selectedChats = [];
    }

    this.searchedChats = this.chats;
    this._chatService.initialize();
  }

  selectToRemove(chatID) {
    let isExists = this.selectedChats.filter((chat) => chat == chatID);
    if (isExists.length) {
      this.selectedChats = this.selectedChats.filter((chat) => chat != chatID);
    } else {
      this.selectedChats.push(chatID);
    }
  }

  clickedToChat(chat) {
    if (this.selectedChats.length || this.open_to_select) {
      this.selectToRemove(chat._id);
    } else {
      this.searchedText = '';
      this._router.navigate([
        `/social-media/tabs/home/chats/${chat._id}`,
        { chat: JSON.stringify(chat) },
      ],{replaceUrl:true});
    }
  }
  getChatBySearch() {
    this.searchedChats = this.chats.filter((item) =>
      item.name.toLowerCase().includes(this.searchedText.toLocaleLowerCase())
    );
  }
  openSelection() {
    this.open_to_select = !this.open_to_select;
    if (!this.open_to_select) this.selectedChats = [];
  }
}
