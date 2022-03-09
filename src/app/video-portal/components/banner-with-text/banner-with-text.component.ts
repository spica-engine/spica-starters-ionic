import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'banner-with-text',
  templateUrl: './banner-with-text.component.html',
  styleUrls: ['./banner-with-text.component.scss'],
})
export class BannerWithTextComponent implements OnInit {

  @Input() item:any;

  constructor() { }

  ngOnInit() {}

}
