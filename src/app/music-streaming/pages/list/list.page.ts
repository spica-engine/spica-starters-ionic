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
  tracks: DataService.Music_Track[] = [];
  playList: DataService.Music_Playlist;
  kind: DataService.Music_Track_Kind;
  paramId: string;

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _audioService: AudioService
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.paramId = this._route.snapshot.params.id;

    this._route.queryParams.subscribe(async (param) => {
      if (param.type == 'musicKind') {
        this.kind = await this.getKind();
        this.tracks = await this.getTracksByKind();
      } else if (param.type == 'artist') {
        this.artist = await this.getArtist();
        this.tracks = this.artist.uploaded_tracks as DataService.Music_Track[];
      } else if (param.type == 'playList') {
        this.playList = await this.getPlayList();
        this.tracks = this.playList.tracks as DataService.Music_Track[];
      }
    });
  }

  getArtist() {
    return DataService.music_artist.get(this.paramId, {
      queryParams: { relation: ['uploaded_tracks.artist'] },
    });
  }

  getKind() {
    return DataService.music_track_kind.get(this.paramId);
  }

  getTracksByKind() {
    return DataService.music_track.getAll({
      queryParams: { filter: { kinds: { $in: [this.paramId] } } },
    });
  }

  getPlayList() {
    return DataService.music_playlist.get(this.paramId, {
      queryParams: { relation: true },
    });
  }

  setTrack(track) {
    this._audioService.setTrack(track);
  }
}
