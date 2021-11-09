import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss'],
})
export class ActionIconComponent implements OnInit {

  @Input() count: number = 0;
  @Input() icon: string = "add-outline";
  @Input() disabled: boolean = false;

  @Output() iconClicked: EventEmitter<boolean> = new EventEmitter();
  @Output() numberClicked: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit() { }

  iconClicked$(){
    this.iconClicked.emit(true);
  }

  numberClicked$(){
    this.numberClicked.emit(this.count);
  }

}
