import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  places: DataService.Place[] = [];
  constructor( private _router: Router) {
    DataService.initialize({ apikey: environment.apikey })
  }

  async ngOnInit() {
    this.places = await this.getAllPlaces();
  }

  getAllPlaces() {
    return DataService.place.getAll();
  }
  createStore(){
    this._router.navigate(['/store-listing/create-store']);
  }
}
