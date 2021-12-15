import { Component, Input, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket';
import { AuthService } from '../../services/auth.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-followable-modal',
  templateUrl: './followable-modal.component.html',
  styleUrls: ['./followable-modal.component.scss'],
})
export class FollowableModalComponent implements OnInit {
  artists: DataService.Artist[] = [];
  user: DataService.User;
  tracks: DataService.Track[] = [];
  playList: DataService.Playlist;
  selectedData: string[] = [];
  searchTerm: string;
  isLoading: boolean = true;

  @Input() type: string = 'artist';
  @Input() playListId: string = '';

  constructor(
    private _authService: AuthService,
    private _modalController: ModalController
  ) {}

  async ngOnInit() {
    this._authService.initBucket();
    this.user = await this.getUser();

    if (this.type == 'artist') {
      this.artists = await this.getArtists();
    } else {
      this.playList = await this.getPlayList();
      this.tracks = await this.getTracks();
    }
    this.isLoading = false;
  }

  getUser() {
    return this._authService.getUser(true).toPromise();
  }

  getArtists() {
    return DataService.artist.getAll({
      queryParams: {
        filter: {
          _id: { $nin: this.user.followed_artists || [] },
        },
      },
    });
  }

  getTracks() {
    return DataService.track.getAll({
      queryParams: {
        filter: {
          _id: { $nin: this.playList.tracks || [] },
        },
      },
    });
  }

  selectData(id) {
    if (this.selectedData.includes(id)) {
      this.selectedData = this.selectedData.filter((el) => {
        return el != id;
      });
    } else {
      this.selectedData.push(id);
    }
  }

  getPlayList() {
    return DataService.playlist.get(this.playListId);
  }

  async search(terms) {
    if(this.type == 'artist'){
      this.artists = await DataService.artist.getAll({
        queryParams: {
          filter: {
            name: { $regex: terms, $options: 'i' },
            _id: { $nin: this.user.followed_artists || [] },
          },
          limit: 10,
        },
      });
    } else if(this.type == 'track'){
      this.tracks = await DataService.track.getAll({
        queryParams: {
          filter: {
            name: { $regex: terms, $options: 'i' },
            _id: { $nin: this.playList.tracks  || []},
          },
          limit: 10,
        },
      });
    }
    
  }

  async apply() {
    if (this.selectedData.length) {
      if (this.type == 'artist') {
        this.user.followed_artists = this.user.followed_artists || [];
        let newArr = this.user.followed_artists.concat(this.selectedData);
        await DataService.user.patch({
          _id: this.user._id,
          followed_artists: newArr,
        });
      } else if (this.type == 'track') {
        let newArr = this.playList.tracks.concat(this.selectedData);
        await DataService.playlist.patch({
          _id: this.playList._id,
          tracks: newArr,
        });
      }

      this._modalController.dismiss({ action: 'updated' });
    } else {
      this._modalController.dismiss();
    }
  }
}
