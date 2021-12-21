import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.page.html',
  styleUrls: ['./activity-details.page.scss'],
})
export class ActivityDetailsPage implements OnInit {
  id: any;
  hotel_activities: DataService.Activities;
  hotel_web_editor: DataService.Site_Configurations;

  sliderOpts = {
    slidesPerView: 4.3,
    spaceBetween: 7,
  };

  constructor(private activatedRoute: ActivatedRoute) {
    DataService.initialize({ apikey: environment.public_apikey });
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    await this.getHotel_activities();
    await this.getHotel_web_editor();
  }

  async getHotel_activities() {
    this.hotel_activities = await DataService.activities.get(this.id);
  }

  async getHotel_web_editor() {
    let data = await DataService.site_configurations.getAll();
    this.hotel_web_editor = data[0];
  }
}
