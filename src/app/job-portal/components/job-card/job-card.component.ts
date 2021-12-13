import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Job_Advert, User, user } from '../../services/bucket';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {
  @Input() job: any;
  @Input() routable: boolean = true;
  @Output() clickSaved: EventEmitter<any> = new EventEmitter();
  @Output() clickJob: EventEmitter<any> = new EventEmitter();
  constructor(
    private _userService: UserService,
    private _commonService: CommonService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}
  me: User;
  loading = '';
  async ngOnInit() {
    this.me = await this._userService.getActiveUser();
  }
  async saveJob() {
    this.me.saved_jobs = this.me.saved_jobs ? this.me.saved_jobs : [];
    this.loading = this.job._id;
    if (this.me.saved_jobs.includes(this.job._id)) {
      this.me.saved_jobs = this.me.saved_jobs.filter(
        (item) => item != this.job._id
      );
      this._commonService.presentToast('Discarded From Saved Jobs', 2000);
    } else {
      this.me.saved_jobs.push(this.job._id);
      this._commonService.presentToast('Added To Saved Jobs', 2000);
    }
    this.clickSaved.emit(this.job);
    await user.patch({ _id: this.me._id, saved_jobs: this.me.saved_jobs });
    this.loading = '';
  }
  clickedJob() {
    this.clickJob.emit(this.job);
    if (this.routable) {
      this._router.navigate(['jobs', this.job._id], {
        relativeTo: this._route,
      });
    }
  }
}
