import { Component, Input, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent implements OnInit {
  @Input() data: DataService.Food;
  rating: number = 0;
  constructor() {}

  ngOnInit() {
    this.data.ratings.forEach((el) => {
      this.rating += el['rating'];
    });
    this.rating = this.rating / this.data.ratings.length;
  }
}
