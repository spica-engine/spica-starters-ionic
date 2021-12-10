import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodProgramDetailPageRoutingModule } from './food-program-detail-routing.module';

import { FoodProgramDetailPage } from './food-program-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodProgramDetailPageRoutingModule
  ],
  declarations: [FoodProgramDetailPage]
})
export class FoodProgramDetailPageModule {}
