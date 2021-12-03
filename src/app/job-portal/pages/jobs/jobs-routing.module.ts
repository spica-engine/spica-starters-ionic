import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsPage } from './jobs.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: JobsPage,
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./detail/detail.module').then((m) => m.DetailPageModule),
      },
    ],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../profile/profile.module').then((m) => m.ProfilePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsPageRoutingModule {}
