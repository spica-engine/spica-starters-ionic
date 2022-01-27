import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: DataService.About_Me;
  age: number = 0;
  quantity: number = 1;
  fact = new Array(4);
  portfolio: DataService.Portfolio[] = [];
  services: DataService.Service[] = [];
  reference: DataService.Reference[] = [];
  contactForm: FormGroup;

  constructor(
    private _commonService: CommonService,
    private _authService: AuthService,
    private _formBuilder: FormBuilder
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.getUser();
    this.getPortfolio();
    this.getService();
    this.getReference();

    this.contactForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]),
      ],
      message: ['', Validators.required],
    });
  }
  calculateAge(birthday) {
    let month_diff = Date.now() - birthday.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return age;
  }
  async getUser() {
    this.user = await DataService.about_me.get(environment.userId);
    if (this.user) {
      this.age = this.calculateAge(new Date(this.user.birthday));
    }
  }
  async getPortfolio(service = undefined) {
    DataService.portfolio
      .getAll({
        queryParams: {
          limit: this.quantity,
          relation: ['service'],
          filter: {
            'service._id': { $ne: '' },
            'service.name': service,
          },
        },
      })
      .then((res) => {
        this.portfolio = res;
        console.log('RES', res);
      });
  }
  async getService() {
    DataService.service.getAll().then((res) => {
      this.services = res;
    });
  }
  async getReference() {
    DataService.reference.getAll().then((res) => {
      this.reference = res;
    });
  }
  async loadMore() {
    this.quantity = this.quantity + 1;
    this.getPortfolio();
  }

  sendMessage() {
    DataService.contact
      .insert(this.contactForm.value)
      .then(() => {
        this.contactForm.reset();
        this._commonService.presentToast('Message sent successfully', 1500);
      })
      .catch((err) => {
        this._commonService.presentToast('Error! Please try later', 1500);
      });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
