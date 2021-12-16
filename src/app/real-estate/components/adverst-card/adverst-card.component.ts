import { Component, Input, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket';


@Component({
  selector: 'adverst-card',
  templateUrl: './adverst-card.component.html',
  styleUrls: ['./adverst-card.component.scss'],
})
export class AdverstCardComponent implements OnInit {

  @Input() data: DataService.Adverst;
  constructor() { }

  ngOnInit() {}

}
