import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClientModalComponent } from '../../components/client-modal/client-modal.component';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  clients: DataService.Client[] = [];
  searchTerm: string;

  constructor(private _modalController: ModalController) {}

  ngOnInit() {
    this.getClients();
  }

  async getClients() {
    this.clients = await DataService.client.getAll();
  }

  async clientModal(client = undefined) {
    const modal = await this._modalController.create({
      component: ClientModalComponent,
      componentProps: {
        action: client ? 'update' : 'create',
        client: client,
      },
    });

    modal.onWillDismiss().then(async (res) => {
      // if (!res.data || res.data.value == 'close') {
      //   return;
      // } else if (res.data.action == 'update') {
      //   await this.updateClient(res.data.appointmentData.client);
      //   this.updateAppointment(res.data.appointmentData);
      // } else if (res.data.action == 'delete') {
      //   this.deleteAppointment(res.data.appointmentData._id);
      // }
    });

    return await modal.present();
  }

  async search(terms) {
    this.clients = await DataService.client.getAll({
      queryParams: {
        filter: {
          $or: [
            { name: { $regex: terms, $options: 'i' } },
            { surname: { $regex: terms, $options: 'i' } },
          ],
        },
        limit: 10,
      },
    });
  }
}
