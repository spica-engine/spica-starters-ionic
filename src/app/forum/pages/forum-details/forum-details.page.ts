import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as DataService from '../../services/bucket';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCommentModalComponent } from '../../components/add-comment-modal/add-comment-modal.component';
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
  user: DataService.User;
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
    this.user = await this._authService.getUser().toPromise()
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
    if (!this.user._id) {
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
        this.comment.comments.push(res.data.comment)
      }
    });

    
    return await commentModal.present();
  }
}
