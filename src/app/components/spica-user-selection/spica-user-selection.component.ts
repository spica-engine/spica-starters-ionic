import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/app/chat/services/environment';

@Component({
  selector: 'spica-user-selection',
  templateUrl: './spica-user-selection.component.html',
  styleUrls: ['./spica-user-selection.component.scss'],
})
export class SpicaUserSelectionComponent implements OnInit {
  @Input() users = [];
  @Input() header;
  @Input() selectionType = 'multiple';
  choosen_users = [];
  searchedText: string = '';
  default_user_image = environment.user_img;

  showedUsers = [];

  constructor(private _modalController: ModalController) {}
  ngOnInit() {
    this.showedUsers = [...this.users];
  }

  toggleUser(user) {
    if (
      this.choosen_users.filter((choosenUser) => choosenUser._id == user._id)
        .length
    ) {
      this.choosen_users.splice(
        this.choosen_users.map((user) => user._id).indexOf(user._id),
        1
      );
    } else {
      this.choosen_users.push(user);
    }
  }

  selectUser(user) {
    this.choosen_users = [];
    this.choosen_users.push(user);
  }
  getUserBySearch() {
    this.showedUsers = this.users.filter((item) =>
      item.following.username
        .toLowerCase()
        .includes(this.searchedText.toLocaleLowerCase())
    );
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this._modalController.dismiss({
      users: this.choosen_users,
    });
  }

  cancle() {
    this._modalController.dismiss({
      users: [],
    });
  }
}
