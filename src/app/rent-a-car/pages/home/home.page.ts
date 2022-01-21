import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  me: DataService.User;
  cars: DataService.Cars[] = [];
  siteItems: DataService.Rent_a_Car_Site_Items;
  categories: DataService.Category[] = [];
  constructor(private _router: Router,private _authService: AuthService) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ngOnInit() {    
    
    this.getSiteItems()
    this.getCar()
    this.getCategories()
    this.me = await this._authService.getUser().toPromise();    
  }

  async getSiteItems() {
    this.siteItems = await DataService.rent_a_car_site_items.get("61bca1641fcf06002dc72192");
  }

  getCar() {
    DataService.cars.getAll({ queryParams: { relation: true } }).then((res) => {
      this.cars = res;
    })
  }

  getCategories() {
    DataService.Category.getAll().then(res =>
      this.categories = res)
  }

  navigateCat(catId){
    this._router.navigate(['rent-a-car/cars',catId],{
      replaceUrl: true,
    })
    
  }
}
