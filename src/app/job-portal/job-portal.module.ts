import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobPortalRoutingModule } from './job-portal-routing.module';
import { SpicaComponentsModule } from '../components/components.module';
import { JobsPageModule } from './pages/jobs/jobs.module';
import { ProfilePageModule } from '../e-commerce/pages/profile/profile.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, JobPortalRoutingModule, SpicaComponentsModule],
})
export class JobPortalModule {}
