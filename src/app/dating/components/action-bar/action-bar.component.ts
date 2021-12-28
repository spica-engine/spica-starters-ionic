import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent implements OnInit {

  constructor() { }

  @Output() choiseAction = new EventEmitter<string>();
  ngOnInit() {}

  choice(value) {
    this.choiseAction.emit(value);
  }

}
