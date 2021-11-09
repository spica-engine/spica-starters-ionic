import { Component, Input, OnInit } from '@angular/core';
import { data } from '@spica-devkit/bucket';

@Component({
  selector: 'music-part-item',
  templateUrl: './part-item.component.html',
  styleUrls: ['./part-item.component.scss'],
})
export class PartItemComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {
  }
}
