import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as DataService from '../../services/bucket';


@Component({
  selector: 'music-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {

  @Input() track;
  @Output() clicked : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  contentClicked(){
    this.clicked.emit('content');
  }

}
