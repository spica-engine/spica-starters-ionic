import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";
import { ProfilePageRoutingModule } from "./profile-routing.module";
import {
  TranslateLoader,
  TranslateModule,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { ProfilePage } from "./profile.page";
import { FormsModule } from "@angular/forms";
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "../assets/i18n/", ".json");
}
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ProfilePageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      extend: true,
    }),
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
