import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'category',
        loadChildren: () => import('../pages/category/category.module').then( m => m.CategoryPageModule)
      },
      {
        path: 'basket',
        loadChildren: () => import('../pages/basket/basket.module').then( m => m.BasketPageModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('../pages/favorite/favorite.module').then( m => m.FavoritePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
