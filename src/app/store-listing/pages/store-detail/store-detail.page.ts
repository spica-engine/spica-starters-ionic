import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.page.html',
  styleUrls: ['./store-detail.page.scss'],
})
export class StoreDetailPage implements OnInit {
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
  }
}
