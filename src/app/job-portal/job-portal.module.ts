import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobPortalRoutingModule } from './job-portal-routing.module';
import { SpicaComponentsModule } from '../components/components.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, JobPortalRoutingModule, SpicaComponentsModule],
})
export class JobPortalModule {}
