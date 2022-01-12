import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarsPageRoutingModule } from './cars-routing.module';

import { CarsPage } from './cars.page';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarsPageRoutingModule,
    SpicaComponentsModule
  ],
  declarations: [CarsPage]
})
export class CarsPageModule {}
