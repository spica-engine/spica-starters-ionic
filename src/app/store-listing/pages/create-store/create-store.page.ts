import { Component, OnInit, } from '@angular/core';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';
import { LocationApiService } from 'src/app/services/location-api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.page.html',
  styleUrls: ['./create-store.page.scss'],
})
export class CreateStorePage implements OnInit {
  selections: any = [];
  countries: any;
  cities: any;
  states: any;
  visible: boolean = false;

  filter = {
    address: {
      country: '',
      city: '',
      district: '',
    },
  };

  workingHours: any = [];
  days: any = [];
  image: any = [];
  storeForm: FormGroup;
  isLoading:boolean=true;

  constructor(private _locationService: LocationApiService, private _formBuilder: FormBuilder,private _router: Router) {
    DataService.initialize({ apikey: environment.apikey })
  }

  async ngOnInit() {
    this.getCountries()
    this.storeForm = this._formBuilder.group({
      nameForm: ['', Validators.required],
      mailForm: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]),
      ],
      phoneForm: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'),
      ])],
      countryForm: ['',Validators.required],
      cityForm: ['',Validators.required],
      districtForm: ['',Validators.required],
      adressForm: ['',Validators.required],
      descriptionForm: ['', Validators.required],
      imageForm: ['', Validators.required],
    });
    this.addSelection()
    this.isLoading=false;
  }
  async addSelection() {
    if (this.selections.length == 7) {
      return;
    }
    this.selections.push({ option: '' });
    this.storeForm.addControl(`dateForm${this.selections.length}`,new FormControl('',Validators.compose([
      Validators.required,
      Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]+-([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'),
    ])))
  }

  removeSelection() {
    this.storeForm.removeControl(`dateForm${this.selections.length}`)
    this.selections.pop();
  }
  userUploadedImage() {
    this.visible = true;
    this.storeForm.patchValue({ imageForm: 'value' })
    this.image.push("https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61b362f197a0a8002e6a5256?alt=media&timestamp=1642682989698");
    this.visible = false;

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

  async districtChange(value) {
    this.filter.address.district = value;
  }
  async create() {
    this.isLoading=true;
    for(let a=1;a<=this.selections.length;a+=1){
      this.days.push(this.storeForm.value[`dateForm${a}`].split('-'))
    }
    let i = 1
    this.days.forEach(element => {
      this.workingHours.push({ day_of_week: i, hours: [{ from: element[0], until: element[1] }] })
      i += 1
    });
    await DataService.place.insert({ mail:this.storeForm.value.mailForm, description:this.storeForm.value.descriptionForm , phone:this.storeForm.value.phoneForm , adress:this.storeForm.value.adressForm , city:this.storeForm.value.cityForm , country:this.storeForm.value.countryForm , district:this.storeForm.value.district , name:this.storeForm.value.nameForm , images: this.image ,working_hours:this.workingHours})
    this._router.navigate(['/store-listing/']);
  }
}
