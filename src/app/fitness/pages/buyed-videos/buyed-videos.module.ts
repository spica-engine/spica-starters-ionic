import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyedVideosPageRoutingModule } from './buyed-videos-routing.module';

import { BuyedVideosPage } from './buyed-videos.page';
import { FitnessComponentModule } from '../../components/fitness-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyedVideosPageRoutingModule,
    FitnessComponentModule
  ],
  declarations: [BuyedVideosPage]
})
export class BuyedVideosPageModule {}
