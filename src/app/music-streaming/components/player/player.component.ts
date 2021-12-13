import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AudioService } from '../../services/audio.service';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'music-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() isLiked: boolean;

  track: DataService.Track = this.audioService.getTrack();
  user: DataService.User;
  paused: boolean = false;
  currentTime: number = 0;
  currentTimeIntervel: any;
  isShuffle: boolean = false;

  constructor(
    public audioService: AudioService,
    private _modalController: ModalController,
    private _eventService: EventService,
    private _router: Router,
    private _authService: AuthService
  ) {}

  async ngOnInit() {
    if (localStorage.getItem('shuffle') == 'true') {
      this.isShuffle = true;
    }
    this.currentTime = this.audioService.currentTime();
    if (!this.audioService.paused()) {
      this.startTimer();
    }
    await this.getUser();
  }

  startTimer() {
    this.currentTimeIntervel = setInterval(() => {
      if (this.currentTime == Math.floor(this.audioService.duration() - 1)) {
        this.stopTimer();
      }
      this.currentTime += 1;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.currentTimeIntervel);
  }

  hide() {
    this.stopTimer();
    this._modalController.dismiss();
  }

  action(value) {
    this._eventService.publish(value);
    if (value == 'play') {
      if (this.audioService.paused()) {
        this.stopTimer();
      } else {
        this.startTimer();
      }
    }
    if (value == 'prev' || value == 'next') {
      this.stopTimer();
      this.setTime(0);
      if (!this.audioService.paused()) {
        this.startTimer();
      }
      this.track = this.audioService.getTrack();

      if (this.user.liked_tracks?.includes(this.track._id)) {
        this.isLiked = true;
      } else {
        this.isLiked = false;
      }
    }

    if (value == 'shuffle') {
      this.isShuffle = !this.isShuffle;
      localStorage.setItem('shuffle', String(this.isShuffle));
    }

    if (value == 'like') {
      this.isLiked = !this.isLiked;
    }
  }

  setTime(value) {
    this.currentTime = value;
    this.audioService.setTime(value);
  }

  goToList() {
    this._router.navigate(
      [
        `/music-streaming/tabs/${this._router.url.split('/')[3]}/list/${
          this.track.artist
        }`,
      ],
      { queryParams: { type: 'artist' } }
    );

    this._modalController.dismiss();
  }

  async getUser() {
    this.user = await this._authService.getUser().toPromise();
  }
}
