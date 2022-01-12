import { Component, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket'
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RentComponent } from '../../components/rent/rent.component';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {
  car: DataService.Cars;
  newRent: DataService.Rent_a_Car;
  id:any;
  isLoading:boolean=true;

  constructor(private modalController: ModalController,private _route: ActivatedRoute,) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
   }

  async ngOnInit() {
    this.id = this._route.snapshot.params.id
    this.getCar();
  }

  async getCar() {
    this.car = await DataService.cars.get(this.id, { queryParams: { relation: true } })
    this.isLoading=false;
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: RentComponent,
      swipeToClose: true,
      componentProps: {
        'carId': this.id,
      }
    });
    return await modal.present();
  }
}
