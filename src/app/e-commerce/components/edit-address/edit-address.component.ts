import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { LocationApiService } from 'src/app/services/location-api.service';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss'],
})
export class EditAddressComponent implements OnInit {

  constructor(private _authService: AuthService, 
    private modalController: ModalController, 
    private alertController: AlertController,
    private _locationService: LocationApiService,
    private _formBuilder: FormBuilder,
    ) {
    this._authService.initBucket();
  }
  @Input() data: any;
  @Input() index: any;
  user: DataService.User;
  mode: boolean = false;
  countries: any;
  cities: any;
  states: any;
  addresForm: FormGroup;

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise()
    if (this.data) {
      this.mode = true;
    }
    else {
      this.data = {
        title: '',
        country: '',
        district: '',
        full_address: '',
        phone: '',
        province: ''
      }
    }
    this.getCountries()
    this.form()
  }
  method(value) {
    if (value == "save" && this.mode) {
      this.data = this.addresForm.value 
      this.user.address[this.index] = this.data;
      DataService.user.patch({ _id: this.user._id, address: this.user.address })
      this.modalController.dismiss()
      return
    }
    else if (!this.mode) {
      this.user.address.push(this.addresForm.value)
      DataService.user.patch({ _id: this.user._id, address: this.user.address })
      this.modalController.dismiss()
      return
    }
    this.presentAlert()
  }
  dismiss() {
    this.modalController.dismiss()
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This address will be deleted.',
      buttons: ['CANCEL', {
        text: 'OK',
        role: 'OK'
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

    if (role == "OK") {
      let remove = this.user.address[this.index]
      this.user.address = this.user.address.filter(el => {
        return el !== remove;
      })
      DataService.user.patch({ _id: this.user._id, address: this.user.address })
      this.modalController.dismiss()
    }
  }
  async getCountries() {
    this.countries = await this._locationService.getCountries();
    this.countries = this.countries['data'];
  }
  async countryChange(value) {    
    let citiesOfcountry = await this._locationService.getCityByCountry(
      value
    );
    this.cities = citiesOfcountry['data']['states'];
    this.addresForm.value.province = '';
    this.addresForm.value.district = '';
  }
  async cityChange(city,country){
    let districtOfProvider = await this._locationService.getStateByCity(
      country,city
    );
    this.states = districtOfProvider['data']  
    this.addresForm.value.district = '';
  }
  form(){
    this.addresForm = this._formBuilder.group({
      title: [this.data.title, Validators.required],
      phone: [this.data.phone, Validators.compose([
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'),
      ])],
      country: [this.data.country, Validators.required],
      province: [this.data.province, Validators.required],
      full_address: [this.data.full_address, Validators.required],
      district: [this.data.district, Validators.required],
    });
  }
}
