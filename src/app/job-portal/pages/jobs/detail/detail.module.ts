import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { JobPortalComponentModule } from 'src/app/job-portal/components/job-portal-components.module';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    JobPortalComponentModule,
    SpicaComponentsModule
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
