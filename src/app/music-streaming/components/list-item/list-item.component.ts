import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'music-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {

  @Input() data: any;
  @Output() clickAction : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {}


  clicked(value){
    this.clickAction.emit(value);
  }

}
