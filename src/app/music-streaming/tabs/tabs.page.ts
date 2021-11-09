import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlayerComponent } from '../components/player/player.component';
import { AudioService } from '../services/audio.service';
import { AuthService } from '../services/auth.service';
import * as DataService from '../services/bucket';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  tracks: DataService.Music_Track[] = [];
  defaultTracks: DataService.Music_Track[] = [];
  shuffledTracks: DataService.Music_Track[] = [];
  trackIndex: number = 0;

  constructor(
    private _modalController: ModalController,
    private _authService: AuthService,
    public audioService: AudioService,
    private _eventService: EventService
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    await this.getTarcks();
    this.audioService.setTrack(this.tracks[this.trackIndex]);

    this._eventService.$event.subscribe((action) => {
      this.audioControl(action);
    });
  }

  async showPlayer() {
    this._modalController.create;

    const modal = await this._modalController.create({
      component: PlayerComponent,
      cssClass: 'my-custom-class',
    });

    modal.onWillDismiss().then((res) => {
      if (!res.data) {
        return;
      }
    });

    return await modal.present();
  }

  playerClicked(event) {
    if (event.action == 'player') {
      this.showPlayer();
    } else if (event.action == 'play') {
      this.playPause();
    } else if (event.action == 'like') {
    }
  }

  async getTarcks() {
    this.tracks = await DataService.music_track.getAll();
    this.defaultTracks = this.tracks;
  }

  audioControl(action) {
    if (action == 'play') {
      this.playPause();
    } else if (action == 'next' && this.trackIndex + 1 < this.tracks.length) {
      this.trackIndex = this.trackIndex + 1;
      this.audioService.setTrack(this.tracks[this.trackIndex]);
    } else if (action == 'prev' && this.trackIndex > 0) {
      this.trackIndex = this.trackIndex - 1;
      this.audioService.setTrack(this.tracks[this.trackIndex]);
    } else if (action == 'shuffle') {
      this.shuffle();
    }
  }

  playPause() {
    if (this.audioService.paused()) {
      this.audioService.play();
    } else {
      this.audioService.pause();
    }
  }

  shuffle() {
    if (localStorage.getItem('shuffle') == 'true') {
      this.shuffledTracks = JSON.parse(JSON.stringify(this.tracks));
      this.tracks = this.shuffledTracks.sort((a, b) => 0.5 - Math.random());
    } else {
      this.tracks = this.defaultTracks;
    }
  }
}
