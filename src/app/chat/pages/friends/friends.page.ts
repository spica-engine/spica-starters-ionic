import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { User } from '../../services/bucket';
import { environment } from '../../services/environment';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage {
  friends: User[];
  default_image = environment.user_img;
  searchedText: string = '';
  personAvailable: boolean = false;
  loading: boolean = false;
  searchedUser: User;

  constructor(
    private _userService: UserService,
    private _commonService: CommonService
  ) {}

  async ionViewWillEnter() {
    let me = await this._userService.getActiveUser();
    this.friends = me.friends as User[];
  }
  async getUserBySearch() {
    this.loading = true;

    if (this.searchedText == '') {
      this.loading = false;
      this.personAvailable = false;
      return;
    }
    let users = await this._userService.getUserByUsername(this.searchedText);
    this.searchedUser = users[0];
    if (!this.searchedUser) {
      this._commonService.presentToast(
        `No person named ${this.searchedText} was found`,
        1000
      );
      this.loading = false;
      return;
    }
    if (this.friends.some((item) => item._id == this.searchedUser._id))
      this._commonService.presentToast(
        `${this.searchedText} is already your friend`,
        1000
      );
    else this.personAvailable = true;
    this.loading = false;
  }
  addPerson() {
    if (this.searchedUser) {
      this._userService.me.friends.push(this.searchedUser as any);
      this._userService.updateProfile(this._userService.me);
      this._commonService.presentToast(
        `${this.searchedText} succesfully added`,
        2000
      );
      this.searchedText = '';
      this.searchedUser = undefined;
      this.personAvailable = false;
    }
  }
}
