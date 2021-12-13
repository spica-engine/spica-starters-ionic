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
  minMax = { lower: 0, upper: 0 };

  constructor(private modal: ModalController) {}

  ngOnInit() {
    this.minMax = this.price_range;
  }

  setFilter() {
    this.filter.push({ name: 'price_range', value: this.price_range });
    this.modal.dismiss({
      filter: this.filter,
    });
  }

  clearFilter() {
    this.modal.dismiss({
      action: 'clear_filter',
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
    if (target.value.length > 0)
      this.filter.push({ name: attribute, value: target.value });
  }
}
