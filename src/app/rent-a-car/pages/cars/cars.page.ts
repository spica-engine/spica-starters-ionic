import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {

  isLoading: boolean = true;
  cars: DataService.Cars[] = [];
  catId: any;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  ngOnInit() {
    this.catId = this._route.snapshot.params.id;
    this.getCars()
  }
  getCars() {
    DataService.cars.getAll({ queryParams: { relation: true, filter: { category: this.catId } } }).then((res) => {
      this.cars = res;
      this.isLoading = false;
    })
  }
  onChange(value) {
   
    if (value == "lowest_price") {
      this.cars.sort((a, b) => {
        return a.price - b.price 
      })
    }
    else if (value == "highest_price") {
      this.cars.sort((a, b) => {
        return b.price - a.price 
      })
    }
    else if (value == "all") {
      DataService.cars.getAll({ queryParams: { relation: true ,filter:{category:this.catId}}, }).then((res) => {
        this.cars = res;
      })
    }
  }

  navigateCar(carId) {
    this._router.navigate(['/rent-a-car/car-details/', carId]);
  }
  async searchCar(terms) {
    this.cars = await DataService.cars.getAll({
      queryParams: {
        filter:
          { name: { $regex: terms, $options: 'i' }, category: this.catId },
        limit: 7,
      },
    });
  }
  option = {
    speed: 500,
    autoplay: true,
  }
}
