import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyedVideosPage } from './buyed-videos.page';

const routes: Routes = [
  {
    path: '',
    component: BuyedVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyedVideosPageRoutingModule {}
