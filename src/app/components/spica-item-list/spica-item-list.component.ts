import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() canLogout: boolean = true;
  seperatedItems: Item[];
  unSeperatedItems: Item[];
  @Output() logout: EventEmitter<any> = new EventEmitter();
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
  constructor(private _router: Router) {}

  ngOnInit() {
    this.seperatedItems = this.items.filter((item) => item.seperate);
    this.unSeperatedItems = this.items.filter((item) => !item.seperate);
  }
  logOut() {
    this.logout.emit();
    setTimeout(() => {
      this._router.navigate(['/home'], { replaceUrl: true });
    }, 1000);
  }
}
