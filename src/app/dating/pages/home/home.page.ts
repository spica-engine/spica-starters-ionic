import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User, Likes, Unlikes, likes, unlikes } from '../../services/bucket';
import { ChatService } from '../../services/chat.service';
import { ChoiseActionService } from '../../services/choise-action.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(
    private _userService: UserService,
    private _authService: AuthService,
    private _choiceService: ChoiseActionService,
    private _router: Router,
    private _chatService: ChatService
  ) {}

  isDisabled: boolean = false;
  playgroundDisable: boolean = false;
  action: string;
  active_user: User[] = [];
  me: User;
  showMatch: boolean = false;
  likesYou: string[] = [];
  matchedUser: User;
  isLoading: boolean = true;

  async ionViewWillEnter() {
    this.me = await this._authService.getUser().toPromise();
    if (!this.me) {
      this._router.navigate(['/dating/tabs/profile']);
      return;
    }
    await this.nextUser();
    await this.getLikesYou();
    this.isLoading = false;
  }

  async nextUser() {
    this.active_user.shift();
    if (this.active_user.length <= 1) {
      this.active_user = this.active_user.concat(
        await this._userService.getUsers()
      );
    }
  }

  choice(value) {
    if (this.isDisabled || this.playgroundDisable) return;

    this.action = value;
    this.isDisabled = true;
    setTimeout(() => {
      this.action = undefined;
      this.isDisabled = false;
    }, 1500);

    if(value=='like'){
      if(this.likesYou.includes(this.active_user[0]._id)){
        this.matchedUser = JSON.parse(JSON.stringify(this.active_user[0]));
        this.showMatch = true;
      }
    }
    
    this._choiceService.insertChoice(value, this.active_user[0]._id, this.me._id);
    this.nextUser();
  }

  async getLikesYou() {
    await likes.getAll({
      queryParams: { filter: { user: this.me._id } },
    }).then((res) => {
      res.forEach((el) => {
        this.likesYou.push(el.liked_user as string);
      })
    })
  }

  userDetails(userId){
    this._router.navigate(['/dating/user-details/' + userId]);
  }

  matchAction(value) {
    if(value == 'message'){
      this.sendSms();
    }
    this.showMatch = false
  }

  async sendSms(){
    let chatUsers = [this.me, this.matchedUser];
    
    let name = `${chatUsers[0].username}, ${chatUsers[1].username}...`;
    let chatExists = await this._chatService.isChatExists(chatUsers);
    if (!chatExists.result) {
      if (chatUsers.length == 2) {
        this.navigateToChat();
      } else
        this._chatService.createChat({
          managers: [this.matchedUser._id],
          name: name,
          is_group: chatUsers.length > 2,
          informations: chatUsers.map((user) => {
            return { user: user._id };
          }) as [],
        });
    } else {
      this._router.navigate([
        `dating/tabs/chats/${chatExists.chat['_id']}`,
        { chat: JSON.stringify(chatExists.chat) },
      ]);
    }
  }

  navigateToChat() {
    this._router.navigate([
      `dating/tabs/chats/${undefined}`,
      { user: JSON.stringify(this.matchedUser) },
    ]);
  }
}
