import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss'],
})
export class AppointmentCardComponent implements OnInit {

  @Input() appointment;
  @Input() employee = false;
  constructor() { }

  ngOnInit() {}

}
