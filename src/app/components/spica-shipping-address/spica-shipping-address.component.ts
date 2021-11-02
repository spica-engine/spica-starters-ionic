import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'spica-shipping-address',
  templateUrl: './spica-shipping-address.component.html',
  styleUrls: ['./spica-shipping-address.component.scss'],
})
export class SpicaShippingAddressComponent implements OnInit {
  shippingData = {
    title: "",
    fullName: "",
    phone: "",
    country: "",
    province: "",
    district: "",
    fullAddress: ""
  }

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss(value) {
    this.modalController.dismiss({
      value: value,
      shippingData: this.shippingData
    });
  }
}
