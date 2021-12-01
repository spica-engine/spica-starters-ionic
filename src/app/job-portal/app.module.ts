import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JobPortalRoutingModule } from './app-routing.module';
import { SpicaComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    SpicaComponentsModule,
    JobPortalRoutingModule,
    HttpClientModule,
  ],
  declarations: [],
  entryComponents: [],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [],
})
export class JobPortalModule {}
