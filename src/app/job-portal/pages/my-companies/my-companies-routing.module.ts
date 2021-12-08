import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCompaniesPage } from './my-companies.page';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MyCompaniesPage },
      {
        path: ':id',
        children: [
          { path: '', component: MyCompaniesPage },
          {
            path: 'profile',
            loadChildren: () =>
              import('../profile/profile.module').then(
                (m) => m.ProfilePageModule
              ),
          },
        ],
      },
      {
        path: 'company',
        loadChildren: () =>
          import('../company/company.module').then((m) => m.CompanyPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCompaniesPageRoutingModule {}
