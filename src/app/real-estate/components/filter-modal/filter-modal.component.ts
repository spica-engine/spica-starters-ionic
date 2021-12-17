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

  filter = {
    address: {
      country: '',
      city: '',
      district: '',
    },
    price: {$gte: 0, $lte: 1000000000}
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
    this.filter.address.country = value;
    let citiesOfcountry = await this._locationService.getCityByCountry(value);

    this.cities = citiesOfcountry['data']['states'];
    this.filter.address.city = '';
    this.filter.address.district = '';
  }

  async cityChange(value) {
    this.filter.address.city = value;
    let stateOfcity = await this._locationService.getStateByCity(this.filter.address.country, value);

    this.states = stateOfcity['data'];
    this.filter.address.district = '';
  }

  async districtChange(value){
    this.filter.address.district = value;
  }


  setFilter() {
    for(let key of  Object.keys(this.filter.address)){
      if(this.filter.address[key]){
        this.filter[`address.${key}`] = this.filter.address[key]
      }
    }
    
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
