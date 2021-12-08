import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedJobsPageRoutingModule } from './saved-jobs-routing.module';

import { SavedJobsPage } from './saved-jobs.page';
import { JobPortalComponentModule } from '../../components/job-portal-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedJobsPageRoutingModule,
    JobPortalComponentModule
  ],
  declarations: [SavedJobsPage]
})
export class SavedJobsPageModule {}
