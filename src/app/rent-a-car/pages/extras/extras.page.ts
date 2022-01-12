import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-extras',
  templateUrl: './extras.page.html',
  styleUrls: ['./extras.page.scss'],
})
export class ExtrasPage  {

  isLoading: boolean = true;
  additional_products: DataService.Additional_Products[] = [];
  car_packet: DataService.Car_Packet[] = [];
  data: any = {};
  newRent: DataService.Rent_a_Car;
  totalPrice: number;
  office: DataService.Office;

  constructor(private _route: ActivatedRoute,private _router: Router,public alertController: AlertController) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ionViewWillEnter() {
    this._route.queryParams.subscribe((res) => {
      this.data = res;
    })
    this.data = JSON.parse(JSON.stringify(this.data))
    await this.checkOffice()
    
    if(this.data.totalPrice){
      this.data.price= this.data.totalPrice
    }
    this.totalPrice = Number(this.data.price)
    
    this.getAdditional_Products();
    this.getCar_Packet();
  }

  getAdditional_Products() {
    DataService.additional_products.getAll().then((res) => {
      this.additional_products = res;
    })
  }

  getCar_Packet() {
    DataService.car_packet.getAll().then((res) => {
      this.car_packet = res;
      this.isLoading= false;
    })
  }
  addProduct(productId, productPrice) {
    this.data.price = Number(this.data.price)
    this.data['additional_products'] = this.data['additional_products'] || [];
    let existProduct = this.data.additional_products.filter((product) => product == productId)[0];
    if (existProduct) {
      this.data.additional_products = this.data.additional_products.filter((product) => product != productId);
      this.totalPrice-= Number(productPrice)
    }
    else {
      this.data['additional_products'].push(productId)
      this.totalPrice+= Number(productPrice)
    }
  }
  addPacket(packetId, packetPrice) {
    this.data.price = Number(this.data.price)
    this.data['packets'] = this.data['packets'] || [];
    let existPacket = this.data.packets.filter((packet) => packet == packetId)[0];
    if (existPacket) {
      this.data.packets = this.data.packets.filter((packet) => packet != packetId);
      this.totalPrice-= Number(packetPrice)
    }
    else {
      this.data['packets'].push(packetId)
      this.totalPrice+= Number(packetPrice)
    }
  }
  navigateBack(){
    this._router.navigate(['cars'])
  }
  async navigate() {
    this.data['totalPrice']=this.totalPrice
    this._router.navigate(['rent-a-car/payment-details'], {queryParams: {...this.data}});
  }
  async checkOffice(){
    this.office = await DataService.office.get(this.data.office_to_take)
    
    if(!this.office.cars.includes(this.data.car)){
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'The office you have chosen does not have the vehicle you want. Click OK to go to Cars',
        buttons: ['OK']
      });
      await alert.present();
      await alert.onDidDismiss();
      this.data.car= ""
      await this._router.navigate(['rent-a-car/cars']);
      this.isLoading = false;
    }
  }
}
// 