import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AddCommentModalComponent } from './add-comment-modal/add-comment-modal.component';
import { PostCardComponent } from './post-card/post-card.component';
import { DateAgoPipe } from '../pipes/date-ago.pipe';
import { UsersListModalComponent } from './users-list-modal/users-list-modal.component';

@NgModule({
  declarations: [
    UsersListModalComponent,
    AddCommentModalComponent,
    PostCardComponent,
    DateAgoPipe
  ],
  exports: [
    UsersListModalComponent,
    AddCommentModalComponent,
    PostCardComponent
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
