import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-create-forum',
  templateUrl: './create-forum.page.html',
  styleUrls: ['./create-forum.page.scss'],
})
export class CreateForumPage implements OnInit {
  user: DataService.User;
  categories: DataService.Category[] = [];
  textSearch: string;
  newComment: DataService.Comment;
  forumCategories: string[];
  constructor(private route: Router, private _authService: AuthService) {
    DataService.initialize({ apikey: '2n1c1akvupiku4' });
  }

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise();
    this.getCategories();
  }

  getCategories() {
    DataService.category.getAll().then((res) => {
      this.categories = res;
    });
  }
  onChange(ids) {
    this.forumCategories = ids;
  }
  getItems(textarea) {
    var q = textarea.srcElement.value;
    this.textSearch = q;
  }
  async sendForum() {
    this.route.navigate(['/forum']);
    this.newComment = await DataService.comment.insert({
      user: this.user._id,
      content: this.textSearch,
      is_post: true,
      category: this.forumCategories,
    });
  }
}
