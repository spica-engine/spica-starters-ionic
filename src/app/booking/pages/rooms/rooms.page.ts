import { Component, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  rooms: DataService.Room[] = [];
  siteConfigurations: DataService.Site_Configurations;

  constructor() {
    DataService.initialize({ apikey: environment.public_apikey });
  }

  async ngOnInit() {
    await this.getHotel_room();
    await this.getHotel_web_editor();
  }

  async getHotel_room() {
    this.rooms = await DataService.room.getAll();
  }

  async getHotel_web_editor() {
    let data = await DataService.site_configurations.getAll();
    this.siteConfigurations = data[0];
  }
}
