import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BranchCategoriesPage } from './branch-categories.page';

const routes: Routes = [
  {
    path: ':id',
    component: BranchCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchCategoriesPageRoutingModule {}
