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
export class TabsPage {
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

  async ionViewWillEnter() {
    await this.checkUserLogin();
  }

  async createAppointmentModal() {
    const modal = await this._modalController.create({
      component: CreateAppointmentComponent,
      componentProps: {
        action: 'create',
      },
    });

    modal.onWillDismiss().then(async (res) => {
      if (!res.data || res.data.action == 'close') {
        return;
      } else if (res.data.action == 'create') {
        let data = res.data.appointmentData;
        let client = {
          _id: data.client?._id,
          name: data.client.name,
          surname: data.client.surname,
          phone: data.client.phone,
          email: data.client.email,
          date_of_birth: data.client.date_of_birth,
        };

        let clientData;
        if (!client._id) {
          clientData = await this.createClient(client);
        } else {
          await this.updateClient(client);
          clientData = { _id: data.client._id };
        }

        let appointmentData = {
          client: clientData['_id'],
          employee: this.user._id,
          from: data.from,
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

  updateClient(client) {
    return DataService.client.patch({ ...client });
  }
}
