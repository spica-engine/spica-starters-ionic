import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { SocialMediaRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../components/components.module';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    '../../assets/social-media/i18n/',
    '.json'
  );
}
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    SocialMediaRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    HttpClientModule
  ],
  bootstrap: [],
  declarations: [],
  entryComponents: [],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class SocialMediaModule {}
