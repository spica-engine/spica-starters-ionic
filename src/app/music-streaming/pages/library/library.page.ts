import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController, ModalController } from '@ionic/angular';
import * as DataService from '../../services/bucket';
import { CreatePlayListComponent } from '../../components/create-play-list/create-play-list.component';
import { Router } from '@angular/router';
import { FollowableModalComponent } from '../../components/followable-modal/followable-modal.component';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage {
  userId: string;
  user: DataService.User;
  playLists: DataService.Playlist[] = [];
  defaultImage = environment.user_img;
  isLoading: boolean = true;

  constructor(
    private _authService: AuthService,
    private _modalController: ModalController,
    private _router: Router,
    private _alertController: AlertController
  ) {
    this._authService.initBucket();
  }

  async ionViewWillEnter() {
    this.userId = (await this._authService.getUser().toPromise())?._id;
    await this.getUser();
    this.playLists = (await this.getPlayLists()) as DataService.Playlist[];
    this.isLoading = false;
  }

  async getUser() {
    this.user = await DataService.user.get(this.userId, {
      queryParams: { relation: true },
    });
  }

  async createPlayListModal() {
    const modal = await this._modalController.create({
      component: CreatePlayListComponent,
    });

    modal.onWillDismiss().then(async (res) => {
      if (!res.data) {
        return;
      }
      let newPlaylist = await this.createPlayList(res.data.title);
      this.playLists.push(newPlaylist);
    });

    return await modal.present();
  }

  async createPlayList(name) {
    return DataService.playlist.insert({
      name: name,
      owner: this.user._id,
    });
  }

  getPlayLists() {
    return DataService.playlist
      .getAll({ queryParams: { filter: { owner: this.user._id } } })
      .catch((err) => console.log(err));
  }

  navigateToList(id) {
    this._router.navigate([`/music-streaming/tabs/library/list/${id}`], {
      queryParams: { type: 'playList' },
    });
  }

  itemClicked(event, id) {
    if (event == 'action') {
      this.presentAlert(id);
    }
  }

  async presentAlert(id) {
    const alert = await this._alertController.create({
      message: 'Are you sure you want to unfollow?',
      buttons: [
        'Cancel',
        {
          text: 'Confirm',
          handler: () => {
            this.unfolowArtist(id);
          },
        },
      ],
    });
    await alert.present();
  }

  unfolowArtist(id) {
    this.user.followed_artists = this.user.followed_artists.filter((artist) => {
      return artist['_id'] != id;
    });
    DataService.user.patch({
      _id: this.user._id,
      followed_artists: this.user.followed_artists,
    });
  }

  async followableModal() {
    const modal = await this._modalController.create({
      component: FollowableModalComponent,
      componentProps: {
        type: 'artist',
      },
    });

    modal.onWillDismiss().then((res) => {
      if (!res.data) {
        return;
      }
      this.getUser();
    });

    return await modal.present();
  }
}
