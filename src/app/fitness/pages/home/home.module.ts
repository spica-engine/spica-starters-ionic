import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FitnessComponentModule } from '../../components/fitness-components.module';
import { SpicaComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FitnessComponentModule,
    SpicaComponentsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
