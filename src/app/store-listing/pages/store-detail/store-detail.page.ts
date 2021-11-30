import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleMapService } from 'src/app/services/google-map.service';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.page.html',
  styleUrls: ['./store-detail.page.scss'],
})
export class StoreDetailPage implements OnInit {
  @ViewChild('map') private mapElement: ElementRef;
  storeId: string;
  store: DataService.Place;
  activeSegment: string = 'info';
  slideOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };
  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  constructor(
    private _route: ActivatedRoute,
    private _mapService: GoogleMapService
  ) {
    DataService.initialize({ apikey: environment.apikey });
  }

  async ngOnInit() {
    this.storeId = this._route.snapshot.paramMap.get('id');
    this.store = await this.getStore();
  }

  getStore() {
    return DataService.place.get(this.storeId);
  }

  segmentChanged(value) {
    this.activeSegment = value;

    if (value == 'map') {
      setTimeout(() => {
        let position = {
          lat: this.store.location?.coordinates[1],
          lng: this.store.location?.coordinates[0],
        };
        this._mapService.initMap(this.mapElement.nativeElement, position);
        this._mapService.addMarker([position]);
      }, 1000);
    }
  }
}
