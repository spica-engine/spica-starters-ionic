import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Job_Advert, User, user } from '../../services/bucket';

@Component({
  selector: 'app-job-applies',
  templateUrl: './job-applies.component.html',
  styleUrls: ['./job-applies.component.scss'],
})
export class JobAppliesComponent implements OnInit {
  @Input() job: Job_Advert;
  users: User[];
  constructor(
    private _modalController: ModalController,
  ) {}
  async ngOnInit() {
    this.users = await user.getAll({
      queryParams: {
        filter: { applied_jobs: { $in: [this.job._id] } },
      },
    });
  }
  dismiss() {
    this._modalController.dismiss();
  }
  gotoUser(user) {
    this._modalController.dismiss({ user: user });
  }
}
