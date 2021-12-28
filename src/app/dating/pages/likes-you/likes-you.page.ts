import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Likes, User, likes } from '../../services/bucket';

@Component({
  selector: 'app-likes-you',
  templateUrl: './likes-you.page.html',
  styleUrls: ['./likes-you.page.scss'],
})
export class LikesYouPage{
  likesYou: Likes[] = [];
  me: User;
  isLoading: boolean = true;
  constructor(private _authService: AuthService) {}

  async ionViewWillEnter(){
    this.me = await this._authService.getUser().toPromise();
    this.likesYou = await this.getLikesYou();
    this.isLoading = false;
  }

  getLikesYou() {
    return likes.getAll({
      queryParams: { filter: { user: this.me._id }, relation: true },
    });
  }
}
