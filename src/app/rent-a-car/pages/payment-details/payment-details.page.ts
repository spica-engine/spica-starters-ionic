import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as DataService from '../../services/bucket'


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.page.html',
  styleUrls: ['./payment-details.page.scss'],
})
export class PaymentDetailsPage implements OnInit {

  car: DataService.Cars;
  additional: DataService.Additional_Products[] = [];
  packets: DataService.Car_Packet[] = [];
  packetPrice: number;
  additionalPrice: number;
  isLoading: boolean = true;
  data: any;
  constructor(private _router: Router,private _route:ActivatedRoute) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ngOnInit() {
    this._route.queryParams.subscribe((res) => {
      this.data = res;
    })
    this.data = JSON.parse(JSON.stringify(this.data)) 
    this.getAdditionalProducts()
    this.getCar()
    await this.getPackets()
    this.isLoading=false;
  }
  async getCar() {
    this.car = await DataService.cars.get(this.data.car, { queryParams: { relation: true } })
  }
  async getAdditionalProducts() {
    this.data.additional_products = this.data.additional_products || []
    this.additional = await DataService.additional_products.getAll({ queryParams: { filter: { _id: { $in: this.data.additional_products } } } })
    
    this.additional.forEach(el =>{
      this.additionalPrice += el.price      
    })
  }
  async getPackets() {
    this.data.packets = this.data.packets || []
    this.packets = await DataService.car_packet.getAll({ queryParams: { filter: { _id: { $in: this.data.packets } } } })
    
    this.packets.forEach(el =>{
      this.packetPrice += el.price      
    })
    
  }
  navigate(){
    this._router.navigate(['rent-a-car/payment'], { queryParams: { ...this.data } });
  }

}
