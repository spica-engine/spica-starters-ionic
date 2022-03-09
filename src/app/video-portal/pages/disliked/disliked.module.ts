import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DislikedPageRoutingModule } from './disliked-routing.module';

import { DislikedPage } from './disliked.page';
import { VideoPortalComponentModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DislikedPageRoutingModule,
    VideoPortalComponentModule
  ],
  declarations: [DislikedPage]
})
export class DislikedPageModule {}
