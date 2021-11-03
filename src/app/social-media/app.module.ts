import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SocialMediaRoutingModule } from './app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SettingsPage } from './pages/settings/settings.page';
import { HomePageModule } from '../home/home.module';
import { FormsModule } from '@angular/forms';
import { BlockedUsersPage } from './pages/blocked-users/blocked-users.page';
import { ProfileEditPage } from './pages/profile-edit/profile-edit.page';
import { SettingsPageModule } from './pages/settings/settings.module';
import { ProfileEditPageModule } from './pages/profile-edit/profile-edit.module';
import { ProfilePageModule } from './pages/profile/profile.module';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [BlockedUsersPage],
  entryComponents: [],
  exports: [BlockedUsersPage],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    CommonModule,
    SocialMediaRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [],
})
export class SocialMediaModule {}
