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
  loading: boolean = false;
  
  constructor(
    private _modalController: ModalController,
  ) { }

  ngOnInit() {

  }

  dismiss(value) {
    this._modalController.dismiss({
      action: value,
      client: JSON.parse(JSON.stringify(this.client)),
    });
  }
}
