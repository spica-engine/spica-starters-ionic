import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsPage } from './cars.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: CarsPage
      },
      {
        path: ':id', component: CarsPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsPageRoutingModule {}
