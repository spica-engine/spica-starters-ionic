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
        path: 'orders',
        loadChildren: () => import('../orders/orders.module').then( m => m.OrdersPageModule)
      },
      {
        path: 'addresses',
        loadChildren: () => import('../addresses/addresses.module').then( m => m.AddressesPageModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
