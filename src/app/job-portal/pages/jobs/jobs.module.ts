import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsPageRoutingModule } from './jobs-routing.module';

import { JobsPage } from './jobs.page';
import { JobPortalComponentModule } from '../../components/job-portal-components.module';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsPageRoutingModule,
    JobPortalComponentModule,
    SpicaComponentsModule,
  ],
  declarations: [JobsPage],
})
export class JobsPageModule {}
