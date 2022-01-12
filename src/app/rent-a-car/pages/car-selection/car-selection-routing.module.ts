import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarSelectionPage } from './car-selection.page';

const routes: Routes = [
  {
    path: '',
    component: CarSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarSelectionPageRoutingModule {}
