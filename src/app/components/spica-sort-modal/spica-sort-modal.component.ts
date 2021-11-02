import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'spica-sort-modal',
  templateUrl: './spica-sort-modal.component.html',
  styleUrls: ['./spica-sort-modal.component.scss'],
})
export class SpicaSortModalComponent implements OnInit {
  @Input() items: any;

  constructor(private modal: ModalController) {}

  ngOnInit() {}

  setSort(key) {
    this.modal.dismiss({
      sort_key: key,
    });
  }
}
