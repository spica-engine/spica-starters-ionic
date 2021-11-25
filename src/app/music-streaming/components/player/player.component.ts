import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AudioService } from '../../services/audio.service';
import * as DataService from '../../services/bucket';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'music-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  track: DataService.Music_Track = this.audioService.getTrack();
  paused: boolean = false;
  currentTime: number = 0;
  currentTimeIntervel: any;
  isShuffle: boolean = false;

  constructor(
    public audioService: AudioService,
    private _modalController: ModalController,
    private _eventService: EventService,
    private _router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem('shuffle') == 'true') {
      this.isShuffle = true;
    }
    this.currentTime = this.audioService.currentTime();
    if (!this.audioService.paused()) {
      this.startTimer();
    }
  }

  startTimer() {
    this.currentTimeIntervel = setInterval(() => {
      console.log(this.audioService.duration())
      if (this.currentTime == Math.floor(this.audioService.duration() -1 )) {
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
    }

    if (value == 'shuffle') {
      this.isShuffle = !this.isShuffle;
      localStorage.setItem('shuffle', String(this.isShuffle));
    }
  }

  setTime(value) {
    this.currentTime = value;
    this.audioService.setTime(value);
  }

  goToList() {
    this._router.navigate([
      `/music-streaming/tabs/${this._router.url.split('/')[3]}/list/${this.track.artist}`,
    ], {queryParams: {type: 'artist'}});

    this._modalController.dismiss();
  }
}
