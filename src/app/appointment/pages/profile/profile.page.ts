import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: DataService.Employee;
  listItems: Item[] = [];
  constructor(private _authService: AuthService, private _router: Router) {
    this._authService.initBucket();
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.user = await this._authService.getUser().toPromise();

    this.listItems = [
      { key: 'username', value: '', seperate: true },
      { key: 'name', value: '', seperate: true },
      { key: 'surname', value: '', seperate: true },
    ];
    this.listItems.forEach(
      (item) => (item.value = this.user[item.key] ? this.user[item.key] : '')
    );
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['/appointment/login']);
  }
}
