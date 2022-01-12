import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtrasPage } from './extras.page';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'payment',
        loadChildren: () => import('../payment/payment.module').then( m => m.PaymentPageModule)
      },
      {
        path: '',
        component: ExtrasPage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtrasPageRoutingModule {}
