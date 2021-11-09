import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverPage } from './discover.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DiscoverPage,
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../social-profile/social-profile.module').then(
            (m) => m.SocialProfilePageModule
          ),
      },
      {
        path: ':search',
        children: [
          {
            path: '',
            component: DiscoverPage,
          },
          {
            path: 'profile',
            loadChildren: () =>
              import('../social-profile/social-profile.module').then(
                (m) => m.SocialProfilePageModule
              ),
          },

          {
            path: 'discover',
            loadChildren: () =>
              import('../discover/discover.module').then(
                (m) => m.DiscoverPageModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
