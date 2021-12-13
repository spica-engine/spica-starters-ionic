import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm: string;
  tracks: DataService.Track[] = [];
  musicKinds: DataService.Track_Kind[] = [];

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _audioService: AudioService
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.musicKinds = await this.getMusicKinds();
  }

  navigateToList(id) {
    this._router.navigate([`/music-streaming/tabs/search/list/${id}`], {
      queryParams: { type: 'musicKind' },
    });
  }

  async search(terms) {
    this.tracks = await DataService.track.getAll({
      queryParams: {
        filter: {
          $or: [
            { name: { $regex: terms, $options: 'i' } },
            { description: { $regex: terms, $options: 'i' } },
          ],
        },
        limit: 10,
      },
    });
  }

  getMusicKinds() {
    return DataService.track_kind.getAll();
  }

  setTrack(track) {
    this._audioService.setTrack(track);
  }
}
