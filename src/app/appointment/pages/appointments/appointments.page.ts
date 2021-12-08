import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateAppointmentComponent } from '../../components/create-appointment/create-appointment.component';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  screen: string = 'coming';
  user: DataService.Employee;
  appointments: DataService.Appointment[] = [];
  eventSource: any[] = [];
  currentAppointments: any = [];
  loading: boolean = true;

  constructor(
    private _authService: AuthService,
    private _modalController: ModalController
  ) {}

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise();
    await this.getAppointments();
    this.prepareAppointments();
  }

  async getAppointments() {
    this.appointments = await DataService.appointment.getAll({
      queryParams: { filter: { employee: this.user._id }, relation: true },
    });
  }

  prepareAppointments() {
    this.appointments?.forEach((appointment) => {
      this.eventSource.push({
        title: `${appointment.client['name']} ${appointment.client['surname']}`,
        startTime: new Date(appointment.from),
        endTime: new Date(appointment.from),
        allDay: false,
        _id: appointment._id,
      });
    });

    this.loading = false;
  }

  onTimeSelected(events) {
    if (!events.length) {
      this.currentAppointments = [];
      return;
    }
    const appointmentIds = [];
    events.forEach((el) => {
      appointmentIds.push(el._id);
    });

    this.currentAppointments = this.appointments.filter((el) => {
      if (appointmentIds.includes(el._id)) {
        return el;
      }
    });
  }

  async appointmentDetailsModal(appointment) {
    const modal = await this._modalController.create({
      component: CreateAppointmentComponent,
      componentProps: {
        action: 'update',
        appointment: appointment,
      },
    });

    modal.onWillDismiss().then(async (res) => {
      if (!res.data || res.data.value == 'close') {
        return;
      } else if (res.data.action == 'update') {
        await this.updateClient(res.data.appointmentData.client);
        this.updateAppointment(res.data.appointmentData);
      } else if (res.data.action == 'delete') {
        this.deleteAppointment(res.data.appointmentData._id);
      }
    });

    return await modal.present();
  }

  async updateClient(client) {
    await DataService.client.patch(client);
  }

  async updateAppointment(appointment) {
    let currentAppointment = JSON.parse(JSON.stringify(appointment));
    await DataService.appointment.patch(appointment);

    let appointmentIndex = this.appointments.findIndex(
      (el) => el._id == currentAppointment._id
    );
    this.appointments[appointmentIndex] = currentAppointment;
    this.prepareAppointments();
  }

  deleteAppointment(id) {
    DataService.appointment.remove(id).then((_) => {
      this.appointments = this.appointments.filter((el) => {
        return el._id !== id;
      });
      this.prepareAppointments();
    });
  }
}
