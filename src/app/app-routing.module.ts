import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { JobsPage } from './job-portal/pages/jobs/jobs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'food-delivery',
    loadChildren: () =>
      import('./food-delivery/app.module').then((m) => m.FoodDeliveryModule),
  },
  {
    path: 'e-commerce',
    loadChildren: () =>
      import('./e-commerce/app.module').then((m) => m.ECommerceModule),
  },
  {
    path: 'social-media',
    loadChildren: () =>
      import('./social-media/app.module').then((m) => m.SocialMediaModule),
  },
  {
    path: 'music-streaming',
    loadChildren: () =>
      import('./music-streaming/app.module').then(
        (m) => m.MusicStreamingModule
      ),
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/app.module').then((m) => m.ChatModule),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/app.module').then((m) => m.PortfolioModule),
  },
  {
    path: 'job-portal',
    loadChildren: () =>
    import('./job-portal/job-portal.module').then((m) => m.JobPortalModule),
  },
  {
    path: 'store-listing',
    loadChildren: () =>
      import('./store-listing/app.module').then((m) => m.StoreListingModule),
  },
  {
    path: 'appointment',
    loadChildren: () =>
      import('./appointment/app.module').then((m) => m.AppointmentModule),
  },
  {
    path: 'forum',
    loadChildren: () =>
      import('./forum/app.module').then((m) => m.ForumModule),
  },
  {
    path: 'fitness',
    loadChildren: () =>
      import('./fitness/app.module').then((m) => m.FitnessModule),
  },
  {
    path: 'real-estate',
    loadChildren: () =>
      import('./real-estate/real-estate.module').then((m) => m.RealEstateModule),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
  },
  {
    path: 'dating',
    loadChildren: () =>
      import('./dating/dating.module').then((m) => m.DatingModule),
  },
  {
    path: 'rent-a-car',
    loadChildren: () =>
      import('./rent-a-car/app.module').then((m) => m.RentACarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
