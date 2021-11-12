import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChatRoutingModule } from './app-routing.module';
import { SpicaComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    SpicaComponentsModule,
    ChatRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [],
  declarations: [],
  entryComponents: [],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class ChatModule {}
