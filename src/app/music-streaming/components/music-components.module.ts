import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MiniPlayerComponent } from './mini-player/mini-player.component';
import { PartItemComponent } from './part-item/part-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { PlayerComponent } from './player/player.component';
import { DurationFormatPipe } from '../pipes/duration-format.pipe';
import { TypeCardComponent } from './type-card/type-card.component';
import { CreatePlayListComponent } from './create-play-list/create-play-list.component';
import { FollowableModalComponent } from './followable-modal/followable-modal.component';

@NgModule({
  declarations: [
    MiniPlayerComponent,
    PartItemComponent,
    ListItemComponent,
    PlayerComponent,
    DurationFormatPipe,
    TypeCardComponent,
    CreatePlayListComponent,
    FollowableModalComponent
  ],
  exports: [
    MiniPlayerComponent,
    PartItemComponent,
    ListItemComponent,
    PlayerComponent,
    TypeCardComponent,
    CreatePlayListComponent
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
export class MusicStreamingComponentModule {}
