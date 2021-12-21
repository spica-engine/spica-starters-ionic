import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rooms: DataService.Room[] = [];
  siteConfigurations: DataService.Site_Configurations;
  activities: DataService.Activities[] = [];
  loading: boolean = true;
  @ViewChild('mySlider') slides: IonSlides;

  swipeNext() {
    this.slides.slideNext();
  }
  swipePrev() {
    this.slides.slidePrev();
  }
  constructor() {
    DataService.initialize({ apikey: environment.public_apikey });
  }

  async ngOnInit() {
    await this.getHotel_room();
    await this.getSiteConfigurations();
    await this.getHotel_activities();
    this.loading = false;
  }

  async getHotel_room() {
    DataService.room.getAll({ queryParams: { limit: 2 } }).then((res) => {
      this.rooms = res;
    });
  }

  async getSiteConfigurations() {
    let data = await DataService.site_configurations.getAll();
    this.siteConfigurations = data[0];
  }

  async getHotel_activities() {
    DataService.activities.getAll().then((res) => {
      this.activities = res;
    });
  }

  option = {
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    autoplay: true,
  };
}
