import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstateRoutingModule } from './real-estate-routing.module';
import { SpicaComponentsModule } from '../components/components.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, RealEstateRoutingModule, SpicaComponentsModule],
})
export class RealEstateModule {}
