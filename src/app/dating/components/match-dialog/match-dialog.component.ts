import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'match-dialog',
  templateUrl: './match-dialog.component.html',
  styleUrls: ['./match-dialog.component.scss'],
})
export class MatchDialogComponent implements OnInit {

  @Input() users;
  @Output() action = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  btnClicked(value){
    this.action.emit(value);
  }

}
