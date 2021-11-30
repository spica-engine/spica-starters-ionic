import { Component, Input, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
})
export class StoreCardComponent implements OnInit {
  @Input() data: DataService.Place;
  constructor() {}

  ngOnInit() {
    // let currentDate = new Date();
    
    // let workingDay = this.data.working_hours?.find((el) => {
    //   return el.day_of_week == (currentDate.getDay() || 7);
    // });
  }
}
