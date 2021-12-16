import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  
  announcements: DataService.Announcement[] = [];
  
  constructor(
    private _authService: AuthService
  ) { 
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.announcements = await this.getAnnouncements();
  }

  getAnnouncements(){
    return DataService.announcement.getAll({queryParams: {sort: {_id: -1}}});
  }

}
