import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdverstsPage } from './adversts.page';

const routes: Routes = [
  {
    path: '',
    component: AdverstsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdverstsPageRoutingModule {}
