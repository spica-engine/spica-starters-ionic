import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MinifiedCardComponent } from './user/minified-card/minified-card.component';
import { FollowingUsersComponent } from './chat/following-users/following-users.component';
import { MentionareaComponent } from './generics/mentionarea/mentionarea.component';
import { ActionIconComponent } from './generics/action-icon/action-icon.component';
import { PostCardComponent } from './post/post-card/post-card.component';
import { UsersModalComponent } from './users-modal/users-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { ActivityCardComponent } from './activity/activity-card/activity-card.component';
import { PostCreatePage } from '../pages/post-create/post-create.page';
import { MentionsComponent } from './generics/mentions/mentions.component';
import { SegmenttabComponent } from './generics/segmenttab/segmenttab.component';
import { MessageSingleComponent } from './chat/message-single/message-single.component';
import { PostCommentComponent } from './post/post-comment/post-comment.component';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    MinifiedCardComponent,
    FollowingUsersComponent,
    MentionareaComponent,
    ActionIconComponent,
    UsersModalComponent,
    PostCardComponent,
    ActivityCardComponent,
    PostCreatePage,
    MentionsComponent,
    SegmenttabComponent,
    MessageSingleComponent,
    PostCommentComponent,
  ],
  exports: [
    MinifiedCardComponent,
    FollowingUsersComponent,
    MentionareaComponent,
    ActionIconComponent,
    UsersModalComponent,
    PostCardComponent,
    ActivityCardComponent,
    PostCreatePage,
    MentionsComponent,
    TranslateModule,
    SegmenttabComponent,
    MessageSingleComponent,
    PostCommentComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
    TranslateModule,
    SpicaComponentsModule
  ],
  providers: [HttpClientModule],
})
export class ComponentsModule {}
