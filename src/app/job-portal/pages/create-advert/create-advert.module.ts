import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAdvertPageRoutingModule } from './create-advert-routing.module';

import { CreateAdvertPage } from './create-advert.page';
import { JobPortalComponentModule } from '../../components/job-portal-components.module';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAdvertPageRoutingModule,
    JobPortalComponentModule,
    SpicaComponentsModule
  ],
  declarations: [CreateAdvertPage]
})
export class CreateAdvertPageModule {}
