import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikedPageRoutingModule } from './liked-routing.module';

import { LikedPage } from './liked.page';
import { VideoPortalComponentModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikedPageRoutingModule,
    VideoPortalComponentModule
  ],
  declarations: [LikedPage]
})
export class LikedPageModule {}
