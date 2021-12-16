import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LocationApiService } from 'src/app/services/location-api.service';

@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent implements OnInit {
  countries: any;
  cities: any;
  states: any;

  @Input() filter = {
    country: '',
    city: '',
    district: '',
    price: {min: 0, max: 1000000000}
  };

  constructor(private _locationService: LocationApiService, private _modal: ModalController ) {}

  ngOnInit() {
    this.getCountries();
  }

  async getCountries() {
    this.countries = await this._locationService.getCountries();
    this.countries = this.countries['data'];
  }

  async countryChange(value) {
    this.filter.country = value;
    let citiesOfcountry = await this._locationService.getCityByCountry(value);

    this.cities = citiesOfcountry['data']['states'];
    this.filter.city = '';
    this.filter.district = '';
  }

  async cityChange(value) {
    this.filter.city = value;
    let stateOfcity = await this._locationService.getStateByCity(this.filter.country, value);

    this.states = stateOfcity['data'];
    this.filter.district = '';
  }

  async districtChange(value){
    this.filter.district = value;
  }


  setFilter() {
    this._modal.dismiss({
      filter: this.filter,
    });
  }

  clearFilter() {
    this._modal.dismiss({
      action: 'clear_filter',
    });
  }
}
