import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatchedVideosPagePageRoutingModule } from './watched-videos-page-routing.module';

import { WatchedVideosPagePage } from './watched-videos-page.page';
import { FitnessComponentModule } from '../../components/fitness-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    WatchedVideosPagePageRoutingModule,
    FitnessComponentModule
  ],
  declarations: [WatchedVideosPagePage]
})
export class WatchedVideosPagePageModule {}
