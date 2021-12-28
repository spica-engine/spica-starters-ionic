import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../services/auth.service';
import { User, user, likes, Likes, unlikes } from '../../services/bucket';
import { ChatService } from '../../services/chat.service';
import { ChoiseActionService } from '../../services/choise-action.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  user: User;
  me: User;
  showMatch: boolean = false;
  isMatched: boolean = false;
  isChoosed: boolean = true;
  isLoading: boolean = true;
  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _choiceService: ChoiseActionService,
    public commonService: CommonService,
    private _chatService: ChatService,
    private _router: Router
  ) {
    this._authService.initBucket;
  }

  async ngOnInit() {
    let userId = this._route.snapshot.params.id;
    this._route.queryParams.subscribe((param) => {
      this.isMatched = param.isMatched == 'true' ? true : false;
    });

    this.user = await this.getUser(userId);
    this.me = await this._authService.getUser().toPromise();
    
    this.user.gallery = this.user.gallery || [];
    this.user.gallery.push(this.user.profile_photo);

    this.checkLike();
    this.isLoading = false;
  }

  getUser(id) {
    return user.get(id);
  }

  async checkLike() {
    let like = await likes.getAll({
      queryParams: { filter: { user: this.user._id, liked_user: this.me._id } },
    });
    if (!like.length) {
      let unlike = await unlikes.getAll({
        queryParams: {
          filter: { user: this.user._id, unliked_user: this.me._id },
        },
      });
      if (!unlike.length) {
        this.isChoosed = false;
        return;
      }
    }
  }

  choice(value) {
    this._choiceService.insertChoice(value, this.user._id, this.me._id);
    if (value == 'like') {
      this.showMatch = true;
    } else {
      this.isChoosed = true;
    }
  }

  matchAction(value) {
    if(value == 'message'){
      this.sendSms();
    }
    this.showMatch = false;
    this.isMatched = true;
    this.isChoosed = true;
  }

  async sendSms(){
    this.isLoading = true;
    let chatUsers = [this.me, this.user];
    
    let name = `${chatUsers[0].username}, ${chatUsers[1].username}...`;
    let chatExists = await this._chatService.isChatExists(chatUsers);
    if (!chatExists.result) {
      if (chatUsers.length == 2) {
        this.navigateToChat();
      } else
        this._chatService.createChat({
          managers: [this.user._id],
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
      { user: JSON.stringify(this.user) },
    ]);
  }
}
