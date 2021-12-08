import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: ':userId',
    children: [
      {
        path: '',
        component: ProfilePage,
      },
      {
        path: 'saved-jobs',
        loadChildren: () =>
          import('../saved-jobs/saved-jobs.module').then(
            (m) => m.SavedJobsPageModule
          ),
      },
      {
        path: 'applied-jobs',
        loadChildren: () =>
          import('../applied-jobs/applied-jobs.module').then(
            (m) => m.AppliedJobsPageModule
          ),
      },
      {
        path: 'my-companies',
        loadChildren: () =>
          import('../my-companies/my-companies.module').then(
            (m) => m.MyCompaniesPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
