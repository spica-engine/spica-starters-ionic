import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Job_Advert,
  job_advert,
  User,
  user,
} from 'src/app/job-portal/services/bucket';
import { UserService } from 'src/app/job-portal/services/user.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  job: Job_Advert;
  me: User;
  selectedCriterias;
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService
  ) {}

  async ngOnInit() {
    let jobId = await this._route.snapshot.paramMap.get('id');
    this.job = await job_advert.get(jobId, { queryParams: { relation: true } });
    this.me = await this._userService.getActiveUser();
    this.selectedCriterias = Object.keys(this.job.criterias);
  }
  async apply() {
    this.me.applied_jobs=this.me.applied_jobs ? this.me.applied_jobs : []
    this.me.applied_jobs.push(this.job._id);
    await user.patch({
      _id: this.me._id,
      applied_jobs: this.me.applied_jobs,
    });
  }
}
