import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ModalController } from '@ionic/angular';
// import { PlayerComponent } from '../components/player/player.component';
// import { AudioService } from '../services/audio.service';
// import { AuthService } from '../services/auth.service';
// import * as DataService from '../services/bucket';
// import { EventService } from '../services/event.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  // tracks: DataService.Music_Track[] = [];
  // defaultTracks: DataService.Music_Track[] = [];
  // shuffledTracks: DataService.Music_Track[] = [];
  // trackIndex: number = 0;
  // user: DataService.Music_User;

  constructor(
    // private _modalController: ModalController,
    // private _authService: AuthService,
    // public audioService: AudioService,
    // private _eventService: EventService,
    // private _router: Router
  ) {
    // this._authService.initBucket();
  }

  // async checkUserLogin() {
  //   this.user = await this._authService.getUser().toPromise();
  //   if (!this.user) {
  //     this._router.navigate(['/music-streaming/authorization']);
  //   }
  // }

  async ngOnInit() {
    // await this.checkUserLogin();
    // await this.getTarcks();
    // this.audioService.setTrack(this.tracks[this.trackIndex]);

    // this._eventService.$event.subscribe((action) => {
    //   this.audioControl(action);
    // });
  }

  // async showPlayer() {
  //   const modal = await this._modalController.create({
  //     component: PlayerComponent,
  //     cssClass: 'my-custom-class',
  //     componentProps: {
  //       isLiked: this.user.liked_tracks?.includes(
  //         this.audioService.getTrack()._id
  //       ),
  //     },
  //   });

  //   modal.onWillDismiss().then((res) => {
  //     if (!res.data) {
  //       return;
  //     }
  //   });

  //   return await modal.present();
  // }

  // playerClicked(event) {
  //   if (event.action == 'player') {
  //     this.showPlayer();
  //   } else if (event.action == 'play') {
  //     this.playPause();
  //   } else if (event.action == 'like') {
  //     this.changeLike();
  //   }
  // }

  // changeLike() {
  //   let trackId = this.audioService.getTrack()._id;
  //   this.user.liked_tracks = this.user.liked_tracks || [];
  //   if (this.user.liked_tracks?.includes(trackId)) {
  //     this.user.liked_tracks = this.user.liked_tracks.filter((el) => {
  //       el != trackId;
  //     });
  //   } else {
  //     this.user.liked_tracks.push(trackId);
  //   }

  //   DataService.music_user.patch({
  //     _id: this.user._id,
  //     liked_tracks: this.user.liked_tracks,
  //   });
  // }

  // async getTarcks() {
  //   this.tracks = await DataService.music_track.getAll();
  //   this.defaultTracks = this.tracks;
  // }

  // audioControl(action) {
  //   if (action == 'play') {
  //     this.playPause();
  //   } else if (action == 'next' && this.trackIndex + 1 < this.tracks.length) {
  //     this.trackIndex = this.trackIndex + 1;
  //     this.audioService.setTrack(this.tracks[this.trackIndex]);
  //   } else if (action == 'prev' && this.trackIndex > 0) {
  //     this.trackIndex = this.trackIndex - 1;
  //     this.audioService.setTrack(this.tracks[this.trackIndex]);
  //   } else if (action == 'shuffle') {
  //     this.shuffle();
  //   } else if (action == 'like') {
  //     this.changeLike();
  //   }
  // }

  // playPause() {
  //   if (this.audioService.paused()) {
  //     this.audioService.play();
  //   } else {
  //     this.audioService.pause();
  //   }
  // }

  // shuffle() {
  //   if (localStorage.getItem('shuffle') == 'true') {
  //     this.shuffledTracks = JSON.parse(JSON.stringify(this.tracks));
  //     this.tracks = this.shuffledTracks.sort((a, b) => 0.5 - Math.random());
  //   } else {
  //     this.tracks = this.defaultTracks;
  //   }
  // }
}