import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarcksPage } from './tarcks.page';

const routes: Routes = [
  {
    path: '',
    component: TarcksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarcksPageRoutingModule {}
