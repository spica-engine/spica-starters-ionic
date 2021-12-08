import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { JobAppliesComponent } from '../../components/job-applies/job-applies.component';
import {
  Company,
  company,
  job_advert,
  Job_Advert,
} from '../../services/bucket';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-my-companies',
  templateUrl: './my-companies.page.html',
  styleUrls: ['./my-companies.page.scss'],
})
export class MyCompaniesPage implements OnInit {
  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _modalController: ModalController,
    private _router: Router
  ) {}
  companies: Company[] = [];
  company: Company;
  jobs: Job_Advert[];
  loading: boolean = true;
  async ngOnInit() {
    let companyId = await this._route.snapshot.paramMap.get('id');
    if (companyId) {
      this.company = await company.get(companyId, {
        queryParams: { relation: true },
      });
      this.jobs = await job_advert.getAll({
        queryParams: { filter: { company: companyId }, relation: true },
      });
    }
    this.loading = false;
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
  async clickedJob(job) {
    const modal = await this._modalController.create({
      component: JobAppliesComponent,
      cssClass: 'my-custom-class',
      componentProps: { job },
    });

    modal.onWillDismiss().then(async (res) => {
      console.log('res :', res);
      if (res.data) {
        if (res.data.user) {
          this._router.navigate(['profile/' + res.data.user._id], {
            relativeTo: this._route,
          });
        }
      }
    });
    return await modal.present();
  }
}
