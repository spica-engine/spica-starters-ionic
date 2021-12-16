import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adversts',
    pathMatch: 'full',
  },
  {
    path: 'consultant',
    loadChildren: () => import('./pages/consultant/consultant.module').then( m => m.ConsultantPageModule)
  },
  {
    path: 'adverst-detail/:id',
    loadChildren: () => import('./pages/adverst-detail/adverst-detail.module').then( m => m.AdverstDetailPageModule)
  },
  {
    path: 'adversts',
    loadChildren: () => import('./pages/adversts/adversts.module').then( m => m.AdverstsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealEstateRoutingModule {}
