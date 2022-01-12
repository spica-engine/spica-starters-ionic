import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'cars',
    loadChildren: () => import('./pages/cars/cars.module').then( m => m.CarsPageModule)
  },
  {
    path: 'car-details',
    loadChildren: () => import('./pages/car-details/car-details.module').then( m => m.CarDetailsPageModule)
  },
  {
    path: 'car-selection',
    loadChildren: () => import('./pages/car-selection/car-selection.module').then( m => m.CarSelectionPageModule)
  },
  {
    path: 'extras',
    loadChildren: () => import('./pages/extras/extras.module').then( m => m.ExtrasPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'payment-details',
    loadChildren: () => import('./pages/payment-details/payment-details.module').then( m => m.PaymentDetailsPageModule)
  },
  {
    path: 'user-rents',
    loadChildren: () => import('./pages/user-rents/user-rents.module').then( m => m.UserRentsPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentACarRoutingModule {}
