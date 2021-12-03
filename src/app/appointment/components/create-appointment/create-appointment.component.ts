import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss'],
})
export class CreateAppointmentComponent implements OnInit {
  appointmentData = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    date_of_birth: '',
    appointment_date: '',
    employee: '',
    note: ''
  };
  employees: DataService.Employee[] = [];

  constructor(
    private _modalController: ModalController,
    private _authService: AuthService,
    ) {
      this._authService.initBucket();
    }

  async ngOnInit() {
   this.employees = await this.getEployees();
  }

  getEployees(){
    return DataService.employee.getAll();
  }

  dismiss(value) {
    this._modalController.dismiss({
      value: value,
      appointmentData: this.appointmentData,
    });
  }
}
