import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedJobsPage } from './saved-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: SavedJobsPage
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('../jobs/jobs.module').then((m) => m.JobsPageModule),
  },
  {
    path: 'company',
    loadChildren: () =>
      import('../company/company.module').then((m) => m.CompanyPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedJobsPageRoutingModule {}
