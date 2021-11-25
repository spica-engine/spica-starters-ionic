import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'create-play-list',
  templateUrl: './create-play-list.component.html',
  styleUrls: ['./create-play-list.component.scss'],
})
export class CreatePlayListComponent implements OnInit {
  title: string = '';
  constructor(private _modal: ModalController) {}

  ngOnInit() {}

  apply() {
    this._modal.dismiss({ title: this.title });
  }

  cancel() {
    this._modal.dismiss();
  }
}
