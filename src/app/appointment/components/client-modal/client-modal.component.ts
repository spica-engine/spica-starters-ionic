import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.scss'],
})
export class ClientModalComponent implements OnInit {
  @Input() client: DataService.Client;
  @Input() action: string = 'create';
  appointments: DataService.Appointment[] = [];
  loading: boolean = false;
  showAppointments: boolean = false;

  constructor(private _modalController: ModalController) {}

  ngOnInit() {
    this.client = this.client || {
      _id: '',
      name: '',
      surname: '',
      phone: '',
      email: '',
      date_of_birth: '',
    };
    this.getAppointments();  
  }

  async getAppointments() {
    this.appointments = await DataService.appointment.getAll({
      queryParams: { filter: { client: this.client._id }, relation: true },
    });
  }

  dismiss(value) {
    this._modalController.dismiss({
      action: value,
      client: JSON.parse(JSON.stringify(this.client)),
    });
  }
}
