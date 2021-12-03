import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'jobs',
    loadChildren: () =>
      import('./pages/jobs/jobs.module').then((m) => m.JobsPageModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/jobs/jobs.module').then((m) => m.JobsPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPortalRoutingModule {}
