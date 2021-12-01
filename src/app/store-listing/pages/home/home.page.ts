import { Component, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  places: DataService.Place[] = [];
  constructor() {
    DataService.initialize({ apikey: environment.apikey })
  }

  async ngOnInit() {
    this.places = await this.getAllPlaces();
  }

  getAllPlaces() {
    return DataService.place.getAll();
  }
}
