import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockedUsersPage } from '../blocked-users/blocked-users.page';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SettingsPage,
      },
      {
        path: 'blockeds',
        children: [
          {
            path: '',
            component: BlockedUsersPage,
          },
          // {
          //   path: 'profile',
          //   loadChildren: () =>
          //     import('../profile/profile.module').then(
          //       (m) => m.ProfilePageModule
          //     ),
          // },
        ],
      },
      // {
      //   path: "profile",
      //   loadChildren: () =>
      //     import("./pages/profile/profile.module").then(
      //       (m) => m.ProfilePageModule
      //     ),
      // },
      // {
      //   path: "discover",
      //   loadChildren: () =>
      //     import("./pages/discover/discover.module").then(
      //       (m) => m.DiscoverPageModule
      //     ),
      // },
      // {
      //   path: "activity",
      //   loadChildren: () =>
      //     import("./pages/activity/activity.module").then(
      //       (m) => m.ActivityPageModule
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
