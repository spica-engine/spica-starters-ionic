import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-users-list-modal',
  templateUrl: './users-list-modal.component.html',
  styleUrls: ['./users-list-modal.component.scss'],
})
export class UsersListModalComponent implements OnInit {

  @Input() operation;
  userId: string;
  user: DataService.User;
  users: DataService.User[] = [];
  
  constructor(
    private _modal: ModalController,
    private _authService: AuthService
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.userId = (await this._authService.getUser().toPromise())?._id;
    await this.getUser();

    this.user[this.operation]?.forEach(el => {
      this.users.push(el)
    });
  }

  async getUser() {
    this.user = await DataService.user.get(this.userId, {
      queryParams: { relation: true },
    });
  }

  action(id){
    this.user[this.operation] = this.user[this.operation].filter((el) => {
      return el['_id'] != id;
    });
    
    this.users = this.user[this.operation];

    DataService.user.patch({
      _id: this.user._id,
      [this.operation]: this.user[this.operation],
    });
  }

  _dismiss() {
    this._modal.dismiss();
  }

}
