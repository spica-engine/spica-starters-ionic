import { Component, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket';
import { AuthService } from '../../services/auth.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-followable-modal',
  templateUrl: './followable-modal.component.html',
  styleUrls: ['./followable-modal.component.scss'],
})
export class FollowableModalComponent implements OnInit {
  artists: DataService.Music_Artist[] = [];
  user: DataService.Music_User;
  selectedArtists: string[] = [];
  searchTerm: string;

  constructor(
    private _authService: AuthService,
    private _modalController: ModalController
  ) {}

  async ngOnInit() {
    this._authService.initBucket();
    this.user = await this.getUser();
    this.artists = await this.getArtists();
  }

  getUser() {
    return this._authService.getUser().toPromise();
  }

  getArtists() {
    return DataService.music_artist.getAll({
      queryParams: {
        filter: {
          _id: { $nin: this.user.followed_artists },
        },
      },
    });
  }

  selectArtist(id) {
    if (this.selectedArtists.includes(id)) {
      this.selectedArtists = this.selectedArtists.filter((el) => {
        return el != id;
      });
    } else {
      this.selectedArtists.push(id);
    }
  }

  async search(terms) {
    this.artists = await DataService.music_artist.getAll({
      queryParams: {
        filter: {
          name: { $regex: terms, $options: 'i' },
          _id: { $nin: this.user.followed_artists },
        },
        limit: 10,
      },
    });
  }

  async apply() {
    if (this.selectedArtists.length) {
      let newArr = this.user.followed_artists.concat(this.selectedArtists);
      await DataService.music_user.patch({
        _id: this.user._id,
        followed_artists: newArr,
      });
      this._modalController.dismiss({ action: 'updated' });
    } else {
      this._modalController.dismiss();
    }
  }
}
