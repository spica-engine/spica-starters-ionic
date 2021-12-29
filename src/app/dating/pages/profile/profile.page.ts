import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { AuthService } from '../../services/auth.service';
import { User } from '../../services/bucket';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  user: User;
  listItems: Item[] = [];
  isLoading: boolean = false;
  constructor(
    private _authService: AuthService,
  ) { }

  async ionViewWillEnter() {
    this.isLoading = true;
    this.user = await this._authService.getUser().toPromise();

    if(this.user){
      this.listItems = [
        { key: 'username', value: '', seperate: true },
        { key: 'name', value: '', seperate: true },
        { key: 'surname', value: '', seperate: true },
      ];
      this.listItems.forEach(
        (item) => (item.value = this.user[item.key] ? this.user[item.key] : '')
      );
      this.listItems = this.listItems.concat([
        {
          key: 'likes_you',
          value: 'Likes You',
          seperate: false,
          link: 'likes-you',
        }
      ]);
    }
    this.isLoading = false;
  }

  logout(){
    this._authService.logout();
    this.user = undefined;
  }
}
