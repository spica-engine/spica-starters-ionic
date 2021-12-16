import { Component, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket';
import { AlertController, ModalController } from '@ionic/angular';
import { environment } from '../../services/environment';
import { AuthService } from '../../services/auth.service';
import { UsersListModalComponent } from '../../components/users-list-modal/users-list-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  postIsLoading: boolean = true;
  userId: string;
  user: DataService.User;
  comments: DataService.Comment[] = [];
  defaultAvatar: string = environment.user_img;
  queryParams = { relation: true, sort: { _id: -1 } };

  constructor(
    private _modal: ModalController,
    private _authService: AuthService,
    private _alertController: AlertController,
    private _router: Router
  ) {
    this._authService.initBucket();
  }

  async ionViewWillEnter() {
    this.userId = (await this._authService.getUser().toPromise())?._id;
    if (!this.userId) {
      this._router.navigateByUrl('/forum/authorization', {replaceUrl: true});
    } else {
      await this.getUser();
      this.segmentChanged('posts');
    }
  }

  async getUser() {
    this.user = await DataService.user.get(this.userId, {
      queryParams: { relation: true },
    });
  }

  segmentChanged(value) {
    this.postIsLoading = true;
    if (value == 'comments') {
      this.queryParams['filter'] = { 'comments.user': this.user._id };
    } else if (value == 'liked') {
      this.queryParams['filter'] = {
        $or: [{ likes: this.user._id }, { dislikes: this.user._id }],
      };
    } else if (value == 'posts') {
      this.queryParams['filter'] = { user: this.user._id, is_post: true };
    }
    this.getData();
  }

  getData() {
    DataService.comment
      .getAll({ queryParams: this.queryParams })
      .then((res) => {
        this.postIsLoading = false;
        this.comments = res;
      });
  }

  async usersListModal(value) {
    const modal = await this._modal.create({
      component: UsersListModalComponent,
      swipeToClose: true,
      componentProps: {
        operation: value,
      },
    });
    return await modal.present();
  }

  async logOut() {
    const alert = await this._alertController.create({
      message: 'Are you sure you want to log out',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert.dismiss(false);
          },
        },
        {
          text: 'Log Out',
          role: 'okay',
          handler: () => {
            this._authService.logout();
            this._router.navigateByUrl('/home', {replaceUrl: true});
          },
        },
      ],
    });

    await alert.present();
  }
}
