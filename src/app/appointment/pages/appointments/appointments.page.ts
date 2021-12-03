import { Component, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  screen: string = 'coming';

  constructor() { }

  ngOnInit() {
  }

  getAppointments(){
    DataService.appointment.getAll({queryParams: {filter: {employee: {}}}})
  }

}
