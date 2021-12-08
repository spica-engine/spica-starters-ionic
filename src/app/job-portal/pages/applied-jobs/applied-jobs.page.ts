import { Component, OnInit } from '@angular/core';
import { User, user } from '../../services/bucket';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.page.html',
  styleUrls: ['./applied-jobs.page.scss'],
})
export class AppliedJobsPage implements OnInit {
  me: User;
  loading: boolean = true;
  constructor(private _userService: UserService) {}

  async ngOnInit() {
    this.me = await user.get(this._userService.me._id, {
      queryParams: { relation: 'applied_jobs.company' },
    });
    this.loading = false;
  }
}
