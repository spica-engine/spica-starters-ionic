import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'food-delivery',
    loadChildren: () => import('./food-delivery/app.module').then( m => m.FoodDeliveryModule)
  },
  {
    path: 'e-commerce',
    loadChildren: () => import('./e-commerce/app.module').then( m => m.ECommerceModule)
  },
  {
    path: 'social-media',
    loadChildren: () => import('./social-media/app.module').then( m => m.SocialMediaModule)
  },
  {
    path: 'music-streaming',
    loadChildren: () => import('./music-streaming/app.module').then( m => m.MusicStreamingModule)
  },
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
