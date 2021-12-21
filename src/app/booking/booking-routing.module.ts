import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./pages/rooms/rooms.module').then( m => m.RoomsPageModule)
  },
  {
    path: 'room-details',
    loadChildren: () => import('./pages/room-details/room-details.module').then( m => m.RoomDetailsPageModule)
  },
  {
    path: 'activity-details',
    loadChildren: () => import('./pages/activity-details/activity-details.module').then( m => m.ActivityDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
