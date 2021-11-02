import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'spica-filter-modal',
  templateUrl: './spica-filter-modal.component.html',
  styleUrls: ['./spica-filter-modal.component.scss'],
})
export class SpicaFilterModalComponent implements OnInit {
  @Input() attributes: any;
  @Input() price_range: any = { lower: 0, upper: 0 };
  @Input() currency: string = 'USD';
  filter: any = [];

  constructor(private modal: ModalController) {}

  ngOnInit() {}

  setFilter() {
    this.filter.push({ name: "price_range", value: this.price_range });
    this.modal.dismiss({
      filter: this.filter,
    });
  }

  changePrice(value) {
    this.price_range = value;
  }

  addNewFilterParams(attribute, target) {
    let tempParams = this.filter.find((el) => {
      if (el.name == attribute) {
        return el;
      }
    });

    if (tempParams) {
      this.filter = this.filter.filter((el) => {
        return el.name !== attribute;
      });
    }

    this.filter.push({ name: attribute, value: target.value });
  }
}
