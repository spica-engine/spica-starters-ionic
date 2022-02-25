import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';

import { VideoPortalRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [CommonModule, VideoPortalRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [],
})
export class VideoPortalModule {}
