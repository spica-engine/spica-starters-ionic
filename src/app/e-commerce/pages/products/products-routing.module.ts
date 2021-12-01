import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailPageModule } from '../product-detail/product-detail.module';

import { ProductsPage } from './products.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductsPage,
      },
      {
        path: ':promotionId',
        component: ProductsPage,
      },
      {
        path: 'product-detail',
        loadChildren: () => import('../product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
