import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { map, share, tap } from 'rxjs/operators';
import { ChatService } from 'src/app/social-media/services/chat.service';
import { DataService } from 'src/app/social-media/services/data.service';
import { ImageService } from 'src/app/social-media/services/image.service';
import { User, Chat, Message, message ,post} from '../../../services/bucket';
import { UserService } from './../../../services/user.service';

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
  messages: Message[] = [];
  $messages: any;
  messagesSubscription: any;
  chatGroupSubscription: any;
  user: User;
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
  constructor(
    private _dataService: DataService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private chatService: ChatService
  ) {}
  async ionViewWillEnter() {
    this.chatId = this.activatedRoute.snapshot.paramMap.get('chat_id');
    this.user = await this.userService.getActiveUser().toPromise();
    if (this.chatId != 'undefined') {
      this.chatGroup = JSON.parse(
        this.activatedRoute.snapshot.paramMap.get('chat')
      );
      this.getMessagesAndUpdateChat();
      this.chatGroupSubscription = this.chatService.$chatGroups.subscribe(
        (chatGroups: Chat[]) => {
          let chatGroup = chatGroups.filter(
            (ch) => ch._id == this.chatGroup._id
          );
          if (chatGroup.length) {
            this.chatGroup = chatGroup[0];
          } else {
            this.usersInChatGroup[this.user._id].status = 'deleted';
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
    this.chatGroup.last_active.forEach((item) => {
      this.usersInChatGroup[item.user._id] = item;
    });
    if (
      (this.chatGroup.is_group &&
        this.usersInChatGroup[this.user._id].status == 'active') ||
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
          this._dataService
            .setOnline("chat", {
              chat: this.chatGroup._id,
            }, this.user._id)
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
      if (message.post && !message.post._id) {
        message["post"] = await post
          .get(message["post"] as string, {
            queryParams: {
              relation: ["post.user", "post.tags", "post.hashtags", "user"],
            },
          })
          
      }
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
        owner: this.user._id as User,
        chat: this.chatId as Message,
        image: this.image_message,
      });

      this.chatGroup = this.chatService.chatGroups.some(
        (item) => item._id == this.chatGroup._id
      )
        ? this.chatService.chatGroups.filter(
            (item) => item._id == this.chatGroup._id
          )[0]
        : this.chatGroup;

      this._dataService
        .setOnline(
          'chat',
          {
            chat: this.chatGroup._id,
            last_message: this.message || 'send photo to you',
          },
          this.user._id
        )
        .toPromise();
      this.message = '';
      this.image_message = undefined;
    }
  }

  async createChat() {
    let users = [this.user, this.opponent];
    const data = await this.chatService
      .createChat({
        name: `${this.opponent.name} ${this.opponent.surname}`,
        last_active: users.map((user) => {
          return { user: user._id };
        }) as [],
      })
      .catch((err) => console.log(err));

    this.chatGroup = data as Chat;
    this.chatGroup.last_active = this.chatGroup.last_active.map((item) => {
      item.user = users.find((i) => i._id == item.user);
      return item;
    });

    this.chatId = data['_id'];
  }
  loadData() {
    this.scroll_params.skip =
      this.scroll_params.limit + this.scroll_params.skip;
    this.getMessages()
      .then(async (data) => {
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
