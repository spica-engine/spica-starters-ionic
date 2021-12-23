import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProfilePage,
      },
      {
        path: 'my-orders',
        loadChildren: () =>
          import('../my-orders/my-orders.module').then(
            (m) => m.MyOrdersPageModule
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
