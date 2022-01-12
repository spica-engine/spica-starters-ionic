import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { delay } from 'rxjs/operators';
import * as DataService from '../../services/bucket'


@Component({
  selector: 'app-car-selection',
  templateUrl: './car-selection.page.html',
  styleUrls: ['./car-selection.page.scss'],
})
export class CarSelectionPage implements OnInit {

  isLoading: boolean = true;
  office: DataService.Office;
  data: any = {};
  totalPrice: any;
  constructor(private route: ActivatedRoute, private _router: Router, public alertController: AlertController) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ngOnInit() {
    this.route.queryParams.subscribe((res) => {
      this.data = res;
    })
    this.data = JSON.parse(JSON.stringify(this.data))
    await this.getOffice();
    this.calculateTotalPrice()
    this.checkCar();
  }

  async getOffice() {
    this.office = await DataService.office.get(this.data.office_to_take, { queryParams: { relation: ['cars', 'cars.category', 'cars.features', 'cars.terms'] } })

  }
  calculateTotalPrice() {
    let time = Math.ceil((new Date(this.data.end).getTime() - new Date(this.data.start).getTime()) / (1000 * 60 * 60 * 24));
    if (time == 0) {
      this.totalPrice = 1;
      if(this.data.price){
        this.data.price = this.data.price * this.totalPrice;
      }
    }
    else {
      this.totalPrice = time;
      if(this.data.price){
        this.data.price = this.data.price * this.totalPrice;        
      }
    }

  }
  selectedCar(carId, price) {
    this.data = JSON.parse(JSON.stringify(this.data))
    this.data['car'] = carId;
    this.data['price'] = price;
    this._router.navigate(['rent-a-car/extras'], { queryParams: { ...this.data } });
  }
  checkCar() {
    if (this.data.car) {
      let car = this.office.cars.filter(el => {
        return el['_id'] === this.data.car;
      })
      if (!car.length) {
        this.presentAlert()
      }
      else {
        this._router.navigate(['rent-a-car/extras'], { queryParams: { ...this.data } });
        delay(5000)
        this.isLoading = false;
      }
    }
    else{
      this.isLoading = false;
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'The office you have chosen does not have the vehicle you want. Click OK to go to available Cars',
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss();
    this.isLoading = false;
  }

}
