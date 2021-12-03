import { Component, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket';
import { ModalController, AlertController } from '@ionic/angular';
import { FollowersModalComponent } from '../../modals/followers-modal/followers-modal.component';
import { FollowingsModalComponent } from '../../modals/followings-modal/followings-modal.component';
import { environment } from '../../services/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  cycle: any;
  isLoading: boolean = false;
  userId: string;
  user: DataService.User;
  comments: DataService.Comment[] = [];

  constructor(
    private modal: ModalController,
    public alertController: AlertController,
    private _authService: AuthService
  ) {
    DataService.initialize({ apikey: '2n1c1akvupiku4' });
  }

  async ngOnInit() {
    this.isLoading = true;
    this.userId = (await this._authService.getUser().toPromise())?._id;
    await this.getUser();
    this.getComments();
  }
  async getUser() {
    this.isLoading = true;
    this.user = await DataService.user.get(this.userId, {
      queryParams: { relation: true },
    });
  }
  getComments() {
    DataService.comment
      .getAll({
        queryParams: {
          filter: { user: this.user._id, is_post: true },
          relation: true,
          sort: { date: -1 },
          limit: 5,
        },
      })
      .then((res) => {
        this.comments = res;
        this.isLoading = false;
      });
  }
  async presentAlert(value) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Are you sure delete the comment',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert.dismiss(false);
          },
        },
        {
          text: 'Okay',
          role: 'okay',
          handler: () => {
            alert.dismiss(true);
          },
        },
      ],
    });

    await alert.present();
    let result = await alert.onDidDismiss();

    if (result) {
      if (result.role == 'okay') {
        this.isLoading = true;
        await DataService.comment.remove(value);
        this.getComments();
      }
    }
  }
  segmentChanged(event) {
    this.cycle = event.detail.value;
    if (event.detail.value == 'comments') {
      this.isLoading = true;
      this.getCommentContent();
    } else if (event.detail.value == 'liked') {
      this.isLoading = true;
      this.getLikedComments();
    } else if (event.detail.value == 'forums') {
      this.isLoading = true;
      this.getComments();
    }
  }
  getLikedComments() {
    DataService.comment
      .getAll({
        queryParams: {
          filter: { likes: { $in: [this.user._id] } },
          relation: true,
        },
      })
      .then((res) => {
        this.comments = res;
        this.isLoading = false;
      });
  }
  getCommentContent() {
    DataService.comment
      .getAll({
        queryParams: {
          filter: { 'comments.user': { $in: [this.user._id] } },
          relation: true,
        },
      })
      .then((res) => {
        this.comments = res;
        this.isLoading = false;
      });
  }
  async followersModal() {
    const followersModal = await this.modal.create({
      component: FollowersModalComponent,
      swipeToClose: true,
    });
    return await followersModal.present();
  }
  async followingsModal() {
    const followingsModal = await this.modal.create({
      component: FollowingsModalComponent,
      swipeToClose: true,
    });
    return await followingsModal.present();
  }
}
