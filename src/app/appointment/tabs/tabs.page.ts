import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateAppointmentComponent } from '../components/create-appointment/create-appointment.component';
import { AuthService } from '../services/auth.service';
import * as DataService from '../services/bucket';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  // tracks: DataService.Music_Track[] = [];
  // defaultTracks: DataService.Music_Track[] = [];
  // shuffledTracks: DataService.Music_Track[] = [];
  // trackIndex: number = 0;
  user: DataService.Employee;

  constructor(
    private _modalController: ModalController,
    private _authService: AuthService,
    private _router: Router
  ) {
    this._authService.initBucket();
  }

  async checkUserLogin() {
    this.user = await this._authService.getUser().toPromise();
    if (!this.user) {
      this._router.navigate(['/appointment/login']);
    }
  }

  async ngOnInit() {
    await this.checkUserLogin();
  }

  async createAppointmentModal() {
    const modal = await this._modalController.create({
      component: CreateAppointmentComponent,
      cssClass: 'my-custom-class',
      componentProps: {},
    });

    modal.onWillDismiss().then(async (res) => {
      if (!res.data || res.data.value == 'close') {
        return;
      } else {
        let data = res.data.appointmentData;
        let client = {
          name: data.name,
          surname: data.surname,
          phone: data.phone,
          email: data.email,
          date_of_birth: data.date_of_birth,
        };
        const clientData = await this.createClient(client);
        let appointmentData = {
          client: clientData['_id'],
          employee: data.employee,
          from: data.appointment_date,
          note: data.note,
        };
        this.createAppointment(appointmentData);
      }
    });

    return await modal.present();
  }

  async createAppointment(data) {
    DataService.appointment.insert(data);
  }

  createClient(client) {
    return DataService.client.insert(client).catch((err) => console.log(err));
  }
}
