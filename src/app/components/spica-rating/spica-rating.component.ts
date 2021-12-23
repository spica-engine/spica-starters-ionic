import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spica-rating',
  templateUrl: './spica-rating.component.html',
  styleUrls: ['./spica-rating.component.scss'],
})
export class SpicaRatingComponent implements OnInit {

  @Input() title:string;
  @Output() action = new EventEmitter<any>();

  comment: string;
  
  rating:number = 3; 
  constructor() { }

  ngOnInit() {}
  
  rate(rating){
    this.rating = rating;
  }

  clicked(value){
    this.action.emit({data: {value: value, rating: this.rating, comment: this.comment}})
  }

}
