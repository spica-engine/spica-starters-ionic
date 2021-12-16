import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterModalComponent } from '../../components/filter-modal/filter-modal.component';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-adversts',
  templateUrl: './adversts.page.html',
  styleUrls: ['./adversts.page.scss'],
})
export class AdverstsPage implements OnInit {
  searchTerm: string;
  adversts: DataService.Adverst[] = [];
  filter = {
    country: '',
    city: '',
    district: '',
    price: { min: 0, max: 1000000000 },
  };

  constructor(
    private _authService: AuthService,
    private _modalController: ModalController
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.adversts = await this.getAdversts();
  }

  async getAdversts() {
    return DataService.adverst.getAll({
      queryParams: {
        relation: true,
        // filter: Object.keys(this.filter).length > 0 ? this.filter : {},
      },
    });
  }

  async search(terms) {
    this.adversts = await DataService.adverst.getAll({
      queryParams: {
        filter: {
          $or: [
            { name: { $regex: terms, $options: 'i' } },
            { description: { $regex: terms, $options: 'i' } },
          ],
        },
        limit: 10,
      },
    });
  }

  async presentFilterModal() {
    const filterModal = await this._modalController.create({
      component: FilterModalComponent,
      swipeToClose: true,
      componentProps: this.filter,
    });

    filterModal.onWillDismiss().then(async (res) => {
      if (!res.data) {
        return;
      } else if (res.data.action == 'clear_filter') {
        this.filter = {
          country: '',
          city: '',
          district: '',
          price: { min: 0, max: 1000000000 },
        };
      } else {
        this.filter = res.data.filter;
        this.getAdversts();
      }
      // this.loading = true;
      // await this.getJobs();
      // this.loading = false;
    });

    return await filterModal.present();
  }
}
