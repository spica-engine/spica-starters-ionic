import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AudioService } from '../../services/audio.service';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  artist: DataService.Music_Artist;
  artistId: string;

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _audioService: AudioService
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.artistId = this._route.snapshot.params.id;
    this.artist = await this.getArtist();
    console.log(this.artist);
  }

  getArtist() {
    return DataService.music_artist.get(this.artistId, {
      queryParams: { relation: ['uploaded_Trackss.artist'] },
    });
  }

  setTrack(track) {
    this._audioService.setTrack(track)
  }
}
