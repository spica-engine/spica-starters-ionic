import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userId: string;
  categoryes: DataService.Category[] = [];
  comments: DataService.Comment[] = [];
  titles: DataService.Title[] = [];
  user: DataService.User;

  constructor(private _authService: AuthService, private _router: Router) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.userId = (await this._authService.getUser().toPromise())?._id;
    if (this.userId) {
      await this.getUser();
    }

    await this.getCategory();
    this.getComments();
    this.getTitles();
  }

  async getUser() {
    this.user = await DataService.user.get(this.userId, {
      queryParams: { relation: true },
    });
  }

  getCategory() {
    return DataService.category.getAll().then((res) => {
      this.categoryes = res;
    });
  }

  async getComments(catId = undefined) {
    this.comments = [];
    await DataService.comment
      .getAll({
        queryParams: {
          limit: 10,
          relation: true,
          sort: { _id: -1 },
          filter: { is_post: true, category: catId },
        },
      })
      .then((res) => {
        this.comments = res;
      });
  }

  getTitles() {
    DataService.title.getAll().then((res) => {
      this.titles = res;
    });
  }

  newPostModa() {
    if (this.userId) {
      this._router.navigate(['/forum/create-forum']);
    } else {
      this._router.navigateByUrl('/forum/authorization', { replaceUrl: true });
    }
  }

  clickMenuItem() {
    if (!this.userId) {
      this._router.navigateByUrl('/forum/authorization', { replaceUrl: true });
    }
  }
}
