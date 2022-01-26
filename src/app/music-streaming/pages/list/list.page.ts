import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { FollowableModalComponent } from '../../components/followable-modal/followable-modal.component';
import { AudioService } from '../../services/audio.service';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  artist: DataService.Artist;
  tracks: any[] = [];
  playList: DataService.Playlist;
  kind: DataService.Track_Kind;
  paramId: string;
  defaultImage = environment.user_img;

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _audioService: AudioService,
    private _modalController: ModalController,
    private _alertController: AlertController,
    private _router: Router
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.paramId = this._route.snapshot.params.id;
    this.manageData();
  }

  manageData() {
    this._route.queryParams.subscribe(async (param) => {
      if (param.type == 'musicKind') {
        this.kind = await this.getKind();
        this.tracks = await this.getTracksByKind();
      } else if (param.type == 'artist') {
        this.artist = await this.getArtist();
        this.tracks = this.artist.uploaded_tracks as DataService.Track[];
      } else if (param.type == 'playList') {
        this.playList = await this.getPlayList();
        this.tracks = this.playList.tracks as DataService.Track[];
      }
    });
  }

  getArtist() {
    return DataService.artist.get(this.paramId, {
      queryParams: { relation: ['uploaded_tracks.artist'] },
    });
  }

  getKind() {
    return DataService.track_kind.get(this.paramId);
  }

  getTracksByKind() {
    return DataService.track.getAll({
      queryParams: { filter: { kinds: { $in: [this.paramId] } } },
    });
  }

  getPlayList() {
    return DataService.playlist.get(this.paramId, {
      queryParams: { relation: true },
    });
  }

  setTrack(track) {
    this._audioService.setTrack(track);
  }

  itemClicked(event, track) {
    if (event == 'action' && this.playList) {
      this.tracks = this.tracks.filter((el) => {
        return el._id != track._id;
      });

      DataService.playlist.patch({
        _id: this.playList._id,
        tracks: this.tracks,
      });
    } else {
      this.setTrack(track);
    }
  }

  async followableModal() {
    const modal = await this._modalController.create({
      component: FollowableModalComponent,
      componentProps: {
        type: 'track',
        playListId: this.paramId,
      },
    });

    modal.onWillDismiss().then((res) => {
      if (!res.data) {
        return;
      }
      this.manageData();
    });

    return await modal.present();
  }

  async presentAlert() {
    const alert = await this._alertController.create({
      message: 'Are you sure you want to remove play list?',
      buttons: [
        'Cancel',
        {
          text: 'Confirm',
          handler: () => {
            this.removePlayList();
          },
        },
      ],
    });
    await alert.present();
  }

  async removePlayList() {
    await DataService.playlist.remove(this.playList._id);
    this._router.navigate([`/music-streaming/tabs/library`]);
  }
}
