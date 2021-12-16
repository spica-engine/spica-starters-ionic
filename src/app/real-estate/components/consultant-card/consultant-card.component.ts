import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'consultant-card',
  templateUrl: './consultant-card.component.html',
  styleUrls: ['./consultant-card.component.scss'],
})
export class ConsultantCardComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit() {}

}
