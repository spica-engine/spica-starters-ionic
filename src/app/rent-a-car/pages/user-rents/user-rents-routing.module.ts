import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRentsPage } from './user-rents.page';

const routes: Routes = [
  {
    path: ':id',
    component: UserRentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRentsPageRoutingModule {}
