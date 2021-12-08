import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../services/auth.service';
import { Job_Advert, User } from '../../services/bucket';
import { UserService } from '../../services/user.service';
import { job_advert, initialize } from '../../services/bucket';
import { DataService } from '../../services/data.service';
import { ModalController } from '@ionic/angular';
import { SpicaFilterModalComponent } from 'src/app/components/spica-filter-modal/spica-filter-modal.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  constructor(
    private _authService: AuthService,
    private _commonService: CommonService,
    private _userService: UserService,
    private _dataService: DataService,
    private _modalController: ModalController
  ) {
    initialize({ identity: localStorage.getItem('job-portal_spica_token') });
  }
  loading: boolean = true;
  me: User;
  jobs: Job_Advert[] = [];
  filter = {};
  ngOnInit() {
    this.getMe();
  }
  getMe() {
    this._userService.getActiveUser().then(
      async (data: User) => {
        if (data && !this.me) {
          this.me = data;
          this.loading = false;
          this.getJobs();
        } else this.loading = false;
      },
      (err) => {
        console.log('err :', err);
        this.loading = false;
      }
    );
  }

  async login(loginData) {
    this.loading = true;
    this._authService
      .login(loginData.email, loginData.password)
      .toPromise()
      .then(
        (_) => {
          this.me = undefined;
          this.getMe();
        },
        (err) => {
          this.loading = false;
          this._commonService.presentToast(err.message, 1500);
        }
      );
  }

  async register(registerData) {
    this._authService
      .register({ ...registerData })
      .toPromise()
      .then((res) => {
        this.login(registerData);
        this._commonService.presentToast(res['message'], 1500);
      })
      .catch((err) => {
        this._commonService.presentToast(err.error.message, 1500);
      });
  }
  async getJobs() {
    this.jobs = await job_advert.getAll({
      queryParams: {
        relation: true,
        filter: Object.keys(this.filter).length > 0 ? this.filter : {},
      },
    });
  }
  async presentFilterModal() {
    const attributes = this.getAttributes();

    const filterModal = await this._modalController.create({
      component: SpicaFilterModalComponent,
      cssClass: 'spica-filter-modal-style',
      swipeToClose: true,
      componentProps: {
        attributes: attributes,
        currency: 'none',
      },
    });

    filterModal.onWillDismiss().then(async (res) => {
      if (!res.data) {
        return;
      }
      if (res.data.filter?.length) {
        res.data.filter.forEach((el) => {
          if (el.name != 'price_range')
            this.filter['criterias.' + el.name] = { $in: el.value };
        });
      }

      if (res.data.action == 'clear_filter' && attributes.length) {
        this.filter = {};
      }
      this.loading = true;
      await this.getJobs();
      this.loading = false;
    });

    return await filterModal.present();
  }
  getAttributes() {
    let attributes = [];
    let criterias = this._dataService.getCriterias();
    Object.keys(criterias).forEach((element) => {
      attributes.push({ name: element, value: criterias[element] });
    });
    return attributes;
  }
}
