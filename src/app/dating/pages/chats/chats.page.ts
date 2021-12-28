import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { chat, Chat, User } from '../../services/bucket';
import { ChatService } from '../../services/chat.service';
import { environment } from '../../services/environment';

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
  loading: boolean = true;
  constructor(
    private _authService: AuthService,
    private _chatService: ChatService,
    private _router: Router
  ) {}

  async ionViewWillEnter() {
    this.user = await this._authService.getUser().toPromise();
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
          let informations_user_date = item.informations.filter(
            (active) => active.user['_id'] != this.user._id
          )[0].date;
          item['seen'] =
            item['new_message_count'] == 0 &&
            item.last_message_owner == this.user._id &&
            new Date(item.last_message_time).getTime() <
              new Date(informations_user_date).getTime();
        }
        if (!this.searchedText) this.searchedChats = [...this.chats];
        else this.getChatBySearch();
      });
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  }

  navigateToChat(user) {
    this._router.navigate([
      `dating/tabs/chats/${undefined}`,
      { user: JSON.stringify(user) },
    ]);
  }

  async deleteChats() {
    this.loading = true;
    let selectedChats = this.chats.filter((cg) =>
      this.selectedChats.some((sc) => cg._id == sc)
    );
    for (let chat_item of selectedChats) {
      chat_item.informations.filter(
        (la) => la.user['_id'] == this.user._id
      )[0].status = 'deleted';

      chat_item.informations = chat_item.informations.map((item) => {
        item.user = item.user['_id'];
        return item;
      });
      if (
        chat_item.is_group &&
        !chat_item.informations.filter(
          (item) =>
            item.status == 'active' &&
            chat_item.managers.includes(item.user as any)
        )[0]
      ) {
        chat_item.managers = [
          chat_item.informations.filter((item) => item.status == 'active')[0]
            .user as any,
        ];
      }
      chat.update(chat_item as any).then();
      this.chats = this.chats.filter(
        (chatGroup: Chat) => chatGroup._id != chat_item._id
      );
      this.selectedChats = [];
    }
    this.open_to_select = false;
    this.searchedChats = this.chats;
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
        `/dating/tabs/chats/${chat._id}`,
        { chat: JSON.stringify(chat) },
      ]);
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