import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FollowersModalComponent } from './followers-modal/followers-modal.component';
import { FollowingsModalComponent } from './followings-modal/followings-modal.component';
import { AddCommentModalComponent } from './add-comment-modal/add-comment-modal.component';

@NgModule({
  declarations: [
    FollowersModalComponent,
    FollowingsModalComponent,
    AddCommentModalComponent,
  ],
  exports: [
    FollowersModalComponent,
    FollowingsModalComponent,
    AddCommentModalComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
  ],
  providers: [HttpClientModule],
})
export class ForumComponentModule {}
