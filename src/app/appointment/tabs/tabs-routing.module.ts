import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'appointments',
        pathMatch: 'full'
      },
      {
        path: 'appointments',
        loadChildren: () => import('../pages/appointments/appointments.module').then( m => m.AppointmentsPageModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('../pages/clients/clients.module').then( m => m.ClientsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
