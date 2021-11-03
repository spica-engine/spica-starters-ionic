import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePage,
      },
      // {
      //   path: "profile",
      //   loadChildren: () =>
      //     import("../profile/profile.module").then(
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
export class HomePageRoutingModule {}
