import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultantsPageRoutingModule } from './consultants-routing.module';

import { ConsultantsPage } from './consultants.page';
import { RealEstateComponentModule } from '../../components/real-estate-components.module';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultantsPageRoutingModule,
    RealEstateComponentModule,
    SpicaComponentsModule
  ],
  declarations: [ConsultantsPage]
})
export class ConsultantsPageModule {}
