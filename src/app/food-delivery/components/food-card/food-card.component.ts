import { Component, Input, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent implements OnInit {

  @Input() data: DataService.Food;
  constructor() { }

  ngOnInit() {
  }

}
