import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: DataService.User;
  listItems: Item[] = [];
  isLoading: boolean = true;

  constructor(private _authService: AuthService) {
    this._authService.initBucket();
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.isLoading = true;
    this.user = await this._authService.getUser().toPromise();

    if (!this.user) {
      this.logout();
      return;
    }

    this.listItems = [
      { key: 'username', value: '', seperate: true },
      { key: 'name', value: '', seperate: true },
      { key: 'surname', value: '', seperate: true },
      { key: 'email', value: '', seperate: true },
    ];
    this.listItems.forEach(
      (item) => (item.value = this.user[item.key] ? this.user[item.key] : '')
    );
    this.isLoading = false;
  }

  logout() {
    this.isLoading = true;
    this._authService.logout();
  }
}
