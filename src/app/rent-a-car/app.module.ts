import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';

import { RentACarRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [CommonModule, RentACarRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [],
})
export class RentACarModule {}
