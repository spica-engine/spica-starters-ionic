import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as DataService from '../../services/bucket';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCommentModalComponent } from '../../modals/add-comment-modal/add-comment-modal.component';
import { environment } from '../../services/environment';
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
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private _router: Router,
    private _authService: AuthService
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.id = this.ActivatedRoute.snapshot.params.id;
    this.userId = (await this._authService.getUser().toPromise())?._id;
    this.getComment();
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

  checkUserLogin() {
    if (!this.userId) {
      this._router.navigate(['/forum/authorization']);
      return false;
    } return true
  }

  async addCommentModal() {
    if(!this.checkUserLogin()){
      return
    }
    const commentModal = await this.modalController.create({
      component: AddCommentModalComponent,
      swipeToClose: true,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        commentId: this.id,
      },
    });
    return await commentModal.present();
  }
}
