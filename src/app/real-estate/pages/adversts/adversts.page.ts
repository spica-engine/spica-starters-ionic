import { Component, OnInit } from '@angular/core';
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

  constructor(private _authService: AuthService) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.adversts = await this.getAdversts();
  }

  async getAdversts(){
    return DataService.adverst.getAll({queryParams: {relation: true}});
  }

  async search(terms) {
    // this.tracks = await DataService.track.getAll({
    //   queryParams: {
    //     filter: {
    //       $or: [
    //         { name: { $regex: terms, $options: 'i' } },
    //         { description: { $regex: terms, $options: 'i' } },
    //       ],
    //     },
    //     limit: 10,
    //   },
    // });
  }
}
