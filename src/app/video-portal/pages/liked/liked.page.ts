import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
})
export class LikedPage implements OnInit {

  user:DataService.User;
  list:any;
  isLoading: boolean = true;

  constructor(private _authService: AuthService) { }

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise();    
    await this.getList()
    this.isLoading=false;
  }
  async getList() {
    let arr1 = await DataService.series.getAll({ queryParams: { filter: { _id: { $in: this.user.liked_series } } } })
    let arr2 = await DataService.movies.getAll({ queryParams: { filter: { _id: { $in: this.user.liked_movies } } } })
    this.list = arr1.concat(arr2)
    
  }
}
