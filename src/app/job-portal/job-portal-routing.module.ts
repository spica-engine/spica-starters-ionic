import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'jobs',
    pathMatch: 'full',
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('./pages/jobs/jobs.module').then((m) => m.JobsPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'company',
    loadChildren: () => import('./pages/company/company.module').then( m => m.CompanyPageModule)
  },
  {
    path: 'create-advert',
    loadChildren: () => import('./pages/create-advert/create-advert.module').then( m => m.CreateAdvertPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobPortalRoutingModule {}
