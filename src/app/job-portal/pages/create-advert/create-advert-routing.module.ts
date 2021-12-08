import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAdvertPage } from './create-advert.page';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CreateAdvertPage },
      {
        path: 'company',
        loadChildren: () =>
          import('../company/company.module').then((m) => m.CompanyPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAdvertPageRoutingModule {}
