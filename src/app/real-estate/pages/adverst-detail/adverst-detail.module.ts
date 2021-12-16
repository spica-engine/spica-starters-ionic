import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdverstDetailPageRoutingModule } from './adverst-detail-routing.module';

import { AdverstDetailPage } from './adverst-detail.page';
import { RealEstateComponentModule } from '../../components/real-estate-components.module';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdverstDetailPageRoutingModule,
    RealEstateComponentModule,
    SpicaComponentsModule
  ],
  declarations: [AdverstDetailPage]
})
export class AdverstDetailPageModule {}
