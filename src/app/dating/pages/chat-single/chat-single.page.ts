import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { map, share } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Chat, message, Message, User } from '../../services/bucket';
import { ChatService } from '../../services/chat.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-chat-single',
  templateUrl: './chat-single.page.html',
  styleUrls: ['./chat-single.page.scss'],
})
export class ChatSinglePage {
  @ViewChild(IonContent, { read: IonContent, static: false })
  private content: IonContent;
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;

  message: string = '';
  chatId: string;
  messages: any[] = [];
  $messages: any;
  messagesSubscription: any;
  chatGroupSubscription: any;
  me: User;
  opponent: User;
  chatGroup: Chat = {};
  usersInChatGroup: object = {};
  loading: boolean = true;
  loading_image: boolean = false;
  image_message: string;
  scroll_params = {
    skip: 0,
    limit: 20,
  };
  singleUserId;
  constructor(
    private _authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private _chatService: ChatService
  ) {
    this._authService.initBucket();
  }
  async ionViewWillEnter() {
    this.chatId = this.activatedRoute.snapshot.paramMap.get('chat_id');
    this.me = await this._authService.getUser().toPromise();
    if (this.chatId != 'undefined') {
      this.chatGroup = JSON.parse(
        this.activatedRoute.snapshot.paramMap.get('chat')
      );
      if (!this.chatGroup.is_group) {
        this.singleUserId = this.chatGroup.informations.filter(
          (item) => item.user['_id'] != this.me._id
        )[0].user['_id'];
      }
      this.getMessagesAndUpdateChat();
      this.chatGroupSubscription = this._chatService.$chatGroups.subscribe(
        (chatGroups: Chat[]) => {
          let chatGroup = chatGroups.filter(
            (ch) => ch._id == this.chatGroup._id
          );
          if (chatGroup.length) {
            this.chatGroup = chatGroup[0];
          } else {
            this.usersInChatGroup[this.me._id].status = 'deleted';
          }
        }
      );
    } else {
      this.loading = false;
      this.opponent = JSON.parse(
        this.activatedRoute.snapshot.paramMap.get('user')
      );
      this.chatGroup['name'] = `${this.opponent.username}`;
    }
    this.infiniteScroll.disabled = true;
  }
  ionViewWillLeave() {
    if (this.messagesSubscription) this.messagesSubscription.unsubscribe();
    if (this.chatGroupSubscription) this.chatGroupSubscription.unsubscribe();
  }

  getMessagesAndUpdateChat() {
    this.chatGroup.informations.forEach((item) => {
      this.usersInChatGroup[item.user['_id']] = item;
    });
    if (
      (this.chatGroup.is_group &&
        this.usersInChatGroup[this.me._id].status == 'active') ||
      !this.chatGroup.is_group
    ) {
      this.$messages = message.realtime.getAll({
        filter: { chat: this.chatId },
        limit: this.scroll_params.limit,
        skip: this.scroll_params.skip,
        sort: { _id: -1 },
      });

      this.messagesSubscription = this.$messages
        .pipe(
          map((messages: []) =>
            messages.sort((a, b) =>
              a['_id'] > b['_id'] ? 1 : b['_id'] > a['_id'] ? -1 : 0
            )
          ),
          share()
        )
        .subscribe(async (data) => {
          this.scroll_params.skip = 0;
          this._authService
            .setOnline(
              'chat',
              {
                chat: this.chatGroup._id,
              },
              this.me._id
            )
            .toPromise();
          this.loading = false;
          if (data.length >= this.scroll_params.limit) {
            this.infiniteScroll.disabled = false;
          }
          let messages = await this.setFirstLastMessage(data);
          this.messages = [...messages];
          setTimeout(() => {
            this.content.scrollToBottom(300);
          }, 200);
        });
      this.chatGroup['new_message_count'] = 0;
    }
  }

  async setFirstLastMessage(data: Message[]) {
    let currentMessage, previousMessage;
    let messages = [];
    for (let [index, message] of data.entries()) {
      previousMessage = { ...(data[index - 1] || null) };
      currentMessage = { ...message };
      currentMessage['first_message'] = false;
      currentMessage['recurring'] = false;
      if (
        index == 0 ||
        new Date(currentMessage.created_at).getDate() !=
          new Date(previousMessage.created_at).getDate()
      )
        currentMessage['first_message'] = true;
      if (previousMessage._id && previousMessage.owner == currentMessage.owner)
        currentMessage['recurring'] = true;
      messages.push(currentMessage);
    }
    return messages;
  }
  sendImage(data) {
    this.loading_image = true;
    let file_buf = this.imageService.toBuffer(data, 'jpeg');
    let bufWithMeta = {
      contentType: 'image/jpeg',
      data: file_buf,
      name: 'image',
    };
    this.imageService.insert(bufWithMeta, undefined).then((res) => {
      this.image_message = res.url;
      this.loading_image = false;
    });
  }
  cancelImage() {
    (this.image_message = undefined), (this.loading_image = false);
  }
  async sendMessage() {
    if ((/\S/.test(this.message) && this.message != '') || this.image_message) {
      if (this.chatId == 'undefined') {
        await this.createChat();
        this.getMessagesAndUpdateChat();
      }
      this.$messages.insert({
        message: this.message,
        owner: this.me._id as User,
        chat: this.chatId as Message,
        image: this.image_message,
      });

      this.chatGroup = this._chatService.chatGroups.some(
        (item) => item._id == this.chatGroup._id
      )
        ? this._chatService.chatGroups.filter(
            (item) => item._id == this.chatGroup._id
          )[0]
        : this.chatGroup;

      this._authService
        .setOnline(
          'chat',
          {
            chat: this.chatGroup._id,
            last_message:
              this.message || (this.image_message ? 'send photo to you' : ''),
          },
          this.me._id
        )
        .toPromise();
      this.message = '';
      this.image_message = undefined;
    }
  }

  async createChat() {
    let users = [this.me, this.opponent];
    const data = await this._chatService
      .createChat({
        name: `${this.opponent.name} ${this.opponent.surname}`,
        informations: users.map((user) => {
          return { user: user._id };
        }) as [],
        managers: [this.me._id],
      })
      .catch((err) => console.log(err));

    this.chatGroup = data as Chat;
    this.chatGroup.informations = this.chatGroup.informations.map((item) => {
      item.user = users.find((i) => i._id == item.user) as any;
      return item;
    });

    this.chatId = data['_id'];
  }
  loadData() {
    this.scroll_params.skip =
      this.scroll_params.limit + this.scroll_params.skip;
    this.getMessages().then(async (data) => {
      this.messages = this.messages.concat(data);
      this.messages = this.messages.sort((a, b) =>
        a['_id'] > b['_id'] ? 1 : b['_id'] > a['_id'] ? -1 : 0
      );
      let messages = await this.setFirstLastMessage(this.messages);
      this.messages = [...messages];
      if (data.length < this.scroll_params.limit)
        this.infiniteScroll.disabled = true;
      this.infiniteScroll.complete();
    });
  }
  getMessages() {
    return message.getAll({
      queryParams: {
        filter: { chat: this.chatId },
        limit: this.scroll_params.limit,
        skip: this.scroll_params.skip,
        sort: { _id: -1 },
      },
    });
  }
}
