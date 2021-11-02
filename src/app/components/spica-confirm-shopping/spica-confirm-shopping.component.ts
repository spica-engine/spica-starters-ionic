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

  activeAddress = 0;


  @Input() addresses: [] = [];

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.addresses)
  }


  dismiss(value) {
    this.modalController.dismiss({
      value: value,
    });
  }

}
