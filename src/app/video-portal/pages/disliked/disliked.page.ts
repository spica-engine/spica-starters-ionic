import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-disliked',
  templateUrl: './disliked.page.html',
  styleUrls: ['./disliked.page.scss'],
})
export class DislikedPage implements OnInit {

  user:DataService.User;
  list:any;
  isLoading: boolean = true;

  constructor(private _authService: AuthService) { }

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise();    
    await this.getList()
    this.isLoading= false;

  }
  async getList() {
    let arr1 = await DataService.series.getAll({ queryParams: { filter: { _id: { $in: this.user.disliked_series } } } })
    let arr2 = await DataService.movies.getAll({ queryParams: { filter: { _id: { $in: this.user.disliked_movies } } } })
    this.list = arr1.concat(arr2)
    
  }

}
