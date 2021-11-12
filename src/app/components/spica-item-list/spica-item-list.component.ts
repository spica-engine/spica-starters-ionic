import { Component, Input, OnInit } from '@angular/core';

export interface Item {
  key: string;
  value: string;
  seperate: boolean;
  link?: string;
}
@Component({
  selector: 'spica-item-list',
  templateUrl: './spica-item-list.component.html',
  styleUrls: ['./spica-item-list.component.scss'],
})
export class SpicaItemListComponent implements OnInit {
  @Input() items: Item[] = [];
  seperatedItems: Item[];
  unSeperatedItems: Item[];
  /* Sample
  items = [
    {
      key: 'name',
      value: 'john',
      seperate: true,
      link: '',
    },
    {
      key: 'favorites',
      value: '',
      seperate: false,
      link: '/favorites',
    },
  ];
  */
  constructor() {}

  ngOnInit() {
    this.seperatedItems = this.items.filter((item) => item.seperate);
    this.unSeperatedItems = this.items.filter((item) => !item.seperate);
  }
}
