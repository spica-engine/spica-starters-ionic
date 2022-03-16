import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.page.html',
  styleUrls: ['./mylist.page.scss'],
})
export class MylistPage implements OnInit {

  isLoading: boolean = true;
  user: DataService.User;
  list: any;
  constructor(private _authService: AuthService,private _router: Router) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise()
    if(!this.user){
      this._router.navigateByUrl('video-portal/profile', {
        replaceUrl: true,
      });
      return
    }
    await this.getList()
    this.isLoading = false
  }
  async getList() {
    let arr1 = await DataService.series.getAll({ queryParams: { filter: { _id: { $in: this.user.saved_series } } } })
    let arr2 = await DataService.movies.getAll({ queryParams: { filter: { _id: { $in: this.user.saved_movies } } } })
    this.list = arr1.concat(arr2)

  }
}
