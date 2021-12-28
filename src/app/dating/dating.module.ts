import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { DatingRoutingModule } from './dating-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [CommonModule, DatingRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [],
})
export class DatingModule {}
