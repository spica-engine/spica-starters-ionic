import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateAdvertComponent } from '../../components/create-advert/create-advert.component';
import { company, Company, initialize } from '../../services/bucket';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.page.html',
  styleUrls: ['./create-advert.page.scss'],
})
export class CreateAdvertPage {
  companies: Company[] = [];
  constructor(
    private _userService: UserService,
    private _modalController: ModalController
  ) {
    initialize({ identity: localStorage.getItem('job-portal_spica_token') });
  }

  async ionViewWillEnter() {
    if (
      this._userService.me.companies &&
      this._userService.me.companies.length > 0
    )
      this.companies = await company.getAll({
        queryParams: {
          filter: {
            _id: { $in: this._userService.me.companies.map((item) => item) },
          },
        },
      });
  }
  async openAdvertModal(company) {
    const modal = await this._modalController.create({
      component: CreateAdvertComponent,
      cssClass: 'my-custom-class',
      componentProps: { company },
    });

    modal.onWillDismiss().then(async (res) => {
      if (res.data) {
      }
    });
    return await modal.present();
  }
}
