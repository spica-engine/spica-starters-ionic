import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-add-comment-modal',
  templateUrl: './add-comment-modal.component.html',
  styleUrls: ['./add-comment-modal.component.scss'],
})
export class AddCommentModalComponent implements OnInit {
  @Input() commentId: any;
  user: DataService.User;
  textSearch: string;
  comment: DataService.Comment;
  newComment: DataService.Comment;

  constructor(
    private route: ActivatedRoute,
    private modal: ModalController,
    private _authService: AuthService
  ) {
    DataService.initialize({ apikey: '2n1c1akvupiku4' });
  }

  async ngOnInit() {
    await this.getUser();
    await this.getComment();
  }
  async getUser() {
    this.user = await this._authService.getUser().toPromise();
  }
  async getComment() {
    this.comment = await DataService.comment.get(this.commentId);
  }

  getItems(textarea) {
    var q = textarea.srcElement.value;
    this.textSearch = q;
  }
  async addInfo() {
    this.newComment = await DataService.comment.insert({
      user: this.user._id,
      content: this.textSearch,
      is_post: false,
    });

    this.comment.comments = this.comment.comments || [];
    this.comment.comments.push(this.newComment._id);
    DataService.comment.patch({
      _id: this.comment._id,
      comments: this.comment.comments,
    });

    this._dismiss();
  }
  _dismiss() {
    this.modal.dismiss({
      comment: this.newComment
    });
  }
}
