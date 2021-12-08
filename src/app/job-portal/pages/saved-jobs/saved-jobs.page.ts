import { Component, OnInit } from '@angular/core';
import { User, user } from '../../services/bucket';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.page.html',
  styleUrls: ['./saved-jobs.page.scss'],
})
export class SavedJobsPage implements OnInit {
  me: User;
  discardedJob = '';
  loading: boolean = true;

  constructor(private _userService: UserService) {}

  async ngOnInit() {
    this.me = await user.get(this._userService.me._id, {
      queryParams: { relation: 'saved_jobs.company' },
    });
    this.loading = false;
  }
  async savedEmitter(job) {
    this.discardedJob = job._id;
    setTimeout(() => {
      this.me.saved_jobs = this.me.saved_jobs.filter(
        (item: any) => item._id != job._id
      );
    }, 400);
  }
}
