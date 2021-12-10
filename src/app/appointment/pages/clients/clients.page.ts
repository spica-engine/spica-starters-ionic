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
    this.clients = await DataService.client.getAll({queryParams: {sort: {_id: -1}}});
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
      if (!res.data || res.data.value == 'close') {
        return;
      } else if (res.data.action == 'create') {
        const newClient = await this.createClient(res.data.client);
        this.clients.unshift(newClient)
      } else if (res.data.action == 'update') {
        await this.updateClient(res.data.client);
      } else if (res.data.action == 'delete') {
        this.deleteClient(res.data.client._id);
        this.clients = this.clients.filter(el => {
          return el._id !== client._id
        })
      }
    });

    return await modal.present();
  }

  async createClient(client) {
    return await DataService.client.insert(client);
  }
  async updateClient(client) {
    await DataService.client.patch(client);
  }
  async deleteClient(id) {
    await DataService.client.remove(id);
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
