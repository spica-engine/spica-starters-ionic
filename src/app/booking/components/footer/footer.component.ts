import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

@Input() title="Copyright © 2021 Booking Starter | Designed by TeknoDev"

  constructor() { }

  ngOnInit() {}

}
