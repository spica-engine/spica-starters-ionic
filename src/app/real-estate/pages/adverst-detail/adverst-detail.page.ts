import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-adverst-detail',
  templateUrl: './adverst-detail.page.html',
  styleUrls: ['./adverst-detail.page.scss'],
})
export class AdverstDetailPage implements OnInit {
  adverstId: string;
  adverst: DataService.Adverst;
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
  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService,
    public location: Location
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.adverstId = this._route.snapshot.params.id;

    this.adverst = await this.getAdverst();
  }

  getAdverst() {
    return DataService.adverst.get(this.adverstId, {
      queryParams: { relation: true },
    });
  }

  segmentChanged(value) {
    this.activeSegment = value;
  }
}
