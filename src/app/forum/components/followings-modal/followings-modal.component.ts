import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-followings-modal',
  templateUrl: './followings-modal.component.html',
  styleUrls: ['./followings-modal.component.scss'],
})
export class FollowingsModalComponent implements OnInit {
  userId: string;
  user: DataService.User;
  constructor(
    private modal: ModalController,
    private _authService: AuthService
  ) {
    DataService.initialize({ apikey: '2n1c1akvupiku4' });
  }

  async ngOnInit() {
    this.userId = (await this._authService.getUser().toPromise())?._id;
    await this.getUser();
  }
  async getUser() {
    this.user = await DataService.user.get(this.userId, {
      queryParams: { relation: true },
    });
  }
  unfollow(value) {
    this.user.followings = this.user.followings.filter((el) => {
      return el['_id'] != value;
    });

    DataService.user.patch({
      _id: this.user._id,
      followings: this.user.followings,
    });
  }
  _dismiss() {
    this.modal.dismiss();
  }
}
