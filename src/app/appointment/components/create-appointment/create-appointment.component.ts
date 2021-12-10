import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss'],
})
export class CreateAppointmentComponent implements OnInit {
  @Input() action: string = 'create';
  @Input() appointment: DataService.Appointment = {
    client: {
      _id: '',
      name: '',
      surname: '',
      phone: '',
      email: '',
      date_of_birth: '',
    },
  };
  clients: DataService.Client[] = [];
  loading: boolean = true;
  isDisable: boolean = false;

  constructor(
    private _modalController: ModalController,
    private _authService: AuthService
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.clients = await this.getClients();
    this.loading = false;
  }

  getClients() {
    return DataService.client.getAll();
  }

  dismiss(value) {
    this._modalController.dismiss({
      action: value,
      appointmentData: JSON.parse(JSON.stringify(this.appointment)),
    });
  }

  setClient(id) {
    if(!id){
      return
    }
    this.isDisable = true;
    this.appointment.client = this.clients.find((el) => el._id == id);
  }

  clearSelect() {
    this.isDisable = false;
    this.appointment['client'] = {
      _id: '',
      name: '',
      surname: '',
      phone: '',
      email: '',
      date_of_birth: '',
    };
  }
}
