import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'spica-confirm-shopping',
  templateUrl: './spica-confirm-shopping.component.html',
  styleUrls: ['./spica-confirm-shopping.component.scss'],
})
export class SpicaConfirmShoppingComponent implements OnInit {
  slideOpts = {
    slidesPerView: 1.6,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  shoppingData = {
    addressIndex: 0,
    paymentMethod: '',
  };

  @Input() addresses: [] = [];
  @Input() totalPrice: number = 0;
  @Input() currency: string = 'USD';
  @Input() paymentMethods: any = [];

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.shoppingData.paymentMethod = this.paymentMethods[0].title;
    
  }

  dismiss(value) {
    this.modalController.dismiss({
      value: value,
      shoppingData: this.shoppingData
    });
  }
}
