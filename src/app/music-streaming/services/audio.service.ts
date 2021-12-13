import { Injectable } from '@angular/core';
import * as DataService from './bucket';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  audio = new Audio();
  track: DataService.Track;

  constructor() {}

  setTrack(track: DataService.Track) {
    let paused = this.paused();
    this.track = track;
    this.audio.src = this.track.source;
    this.checkAndPlay(paused);
  }

  getTrack() {
    return this.track;
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  paused() {
    return this.audio.paused;
  }

  duration() {
    return this.audio.duration;
  }

  currentTime() {
    return this.audio.currentTime;
  }

  setTime(value) {
    this.audio.currentTime = value;
  }

  private checkAndPlay(paused) {
    if (paused) {
      return;
    }
    this.play();
  }
}
