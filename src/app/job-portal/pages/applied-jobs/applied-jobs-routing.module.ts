import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppliedJobsPage } from './applied-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: AppliedJobsPage,
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
export class AppliedJobsPageRoutingModule {}
