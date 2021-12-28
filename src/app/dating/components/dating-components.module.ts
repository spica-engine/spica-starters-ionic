import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserCardComponent } from './user-card/user-card.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MatchDialogComponent } from './match-dialog/match-dialog.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [UserCardComponent, ActionBarComponent, MatchDialogComponent, MessageComponent],
  exports: [UserCardComponent, ActionBarComponent, MatchDialogComponent,MessageComponent],
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
export class DatingComponentModule {}
