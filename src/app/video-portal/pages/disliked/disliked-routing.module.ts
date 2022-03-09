import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DislikedPage } from './disliked.page';

const routes: Routes = [
  {
    path: '',
    component: DislikedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DislikedPageRoutingModule {}
