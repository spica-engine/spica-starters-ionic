import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  about: DataService.About_Us;

  constructor(private _authService: AuthService) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.about = await this.getAboutInfo();
  }

  getAboutInfo() {
    return DataService.about_us.getAll().then((res) => {
      return res[0] || null;
    });
  }
}
