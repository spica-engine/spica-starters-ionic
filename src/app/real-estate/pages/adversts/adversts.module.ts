import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdverstsPageRoutingModule } from './adversts-routing.module';

import { AdverstsPage } from './adversts.page';
import { RealEstateComponentModule } from '../../components/real-estate-components.module';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdverstsPageRoutingModule,
    RealEstateComponentModule,
    SpicaComponentsModule
  ],
  declarations: [AdverstsPage]
})
export class AdverstsPageModule {}
