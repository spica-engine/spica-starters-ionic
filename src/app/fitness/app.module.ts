import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { FitnessRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [CommonModule, FitnessRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [],
})
export class FitnessModule {}
