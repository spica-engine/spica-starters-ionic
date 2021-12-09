import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForumDetailsPageRoutingModule } from './forum-details-routing.module';

import { ForumDetailsPage } from './forum-details.page';
import { ForumComponentModule } from '../../components/forum-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumDetailsPageRoutingModule,
    ForumComponentModule
  ],
  declarations: [ForumDetailsPage]
})
export class ForumDetailsPageModule {}
