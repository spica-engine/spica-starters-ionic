import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as DataService from '../../services/bucket';
import { ActivatedRoute } from '@angular/router';
import { AddCommentModalComponent } from '../../components/add-comment-modal/add-comment-modal.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.page.html',
  styleUrls: ['./forum-details.page.scss'],
})
export class ForumDetailsPage implements OnInit {
  comment: DataService.Comment;
  id: any;
  userId: string;
  user: DataService.User;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _modalController: ModalController,
    private _authService: AuthService
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.id = this._activatedRoute.snapshot.params.id;
    this.userId = (await this._authService.getUser().toPromise())?._id;
    if (this.userId) {
      this.getUser();
    }
    this.getComment();
  }

  async getUser() {
    this.user = await DataService.user.get(this.userId, {
      queryParams: { relation: true },
    });
  }

  async getComment() {
    this.comment = await DataService.comment.get(this.id, {
      queryParams: {
        relation: [
          'comments.user',
          'user',
          'likes',
          'dislikes',
          'comments.likes',
          'comments.dislikes',
        ],
      },
    });
  }

  async addCommentModal() {
    const commentModal = await this._modalController.create({
      component: AddCommentModalComponent,
      swipeToClose: true,
      componentProps: {
        commentId: this.id,
      },
    });

    commentModal.onWillDismiss().then(async (res) => {
      if (!res.data || res.data.action == 'close') {
        return;
      } else {
        res.data.comment['user'] = this.user;
        this.comment.comments = this.comment.comments || [];
        this.comment.comments.push(res.data.comment);
      }
    });

    return await commentModal.present();
  }
}
