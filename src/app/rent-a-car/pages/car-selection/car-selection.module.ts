import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarSelectionPageRoutingModule } from './car-selection-routing.module';

import { CarSelectionPage } from './car-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarSelectionPageRoutingModule,
  ],
  declarations: [CarSelectionPage],
})
export class CarSelectionPageModule {}
