import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from './banner/banner.component';
import { BannerWithTextComponent } from './banner-with-text/banner-with-text.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
   BannerComponent,
   BannerWithTextComponent,
   FilterComponent
  ],
  exports: [
    BannerComponent,
   BannerWithTextComponent,
   FilterComponent

  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
  ],
  providers: [HttpClientModule],
})
export class VideoPortalComponentModule {}
