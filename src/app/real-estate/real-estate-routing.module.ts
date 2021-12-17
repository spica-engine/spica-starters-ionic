import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adversts',
    pathMatch: 'full',
  },
  {
    path: 'adverst-detail/:id',
    loadChildren: () => import('./pages/adverst-detail/adverst-detail.module').then( m => m.AdverstDetailPageModule)
  },
  {
    path: 'adversts',
    loadChildren: () => import('./pages/adversts/adversts.module').then( m => m.AdverstsPageModule)
  },
  {
    path: 'announcement',
    loadChildren: () => import('./pages/announcement/announcement.module').then( m => m.AnnouncementPageModule)
  },
  {
    path: 'consultants',
    loadChildren: () => import('./pages/consultants/consultants.module').then( m => m.ConsultantsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealEstateRoutingModule {}
