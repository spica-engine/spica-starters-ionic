import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    slidesPerView: 2.4,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  user: DataService.User;

  constructor(private _authService: AuthService) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.user = await this.getUser();
  }

  getUser() {
    return DataService.user.get('618926c7b2af16002f45858b', {
      queryParams: { relation: true },
    });
  }
}
