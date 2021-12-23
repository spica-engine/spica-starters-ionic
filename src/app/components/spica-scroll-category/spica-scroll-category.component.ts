import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spica-scroll-category',
  templateUrl: './spica-scroll-category.component.html',
  styleUrls: ['./spica-scroll-category.component.scss'],
})
export class SpicaScrollCategoryComponent implements OnInit {

  @Input() categories;
  @Output() action = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {}

  clicked(value){
    this.action.emit(value);
  }

}
