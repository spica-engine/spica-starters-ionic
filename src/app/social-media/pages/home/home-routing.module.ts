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
      {
        path: 'profile',
        loadChildren: () =>
          import('../social-profile/social-profile.module').then(
            (m) => m.SocialProfilePageModule
          ),
      },
      // {
      //   path: "discover",
      //   loadChildren: () =>
      //     import("./pages/discover/discover.module").then(
      //       (m) => m.DiscoverPageModule
      //     ),
      // },
      {
        path: 'chats',
        loadChildren: () =>
          import('../chat/chats/chats.module').then((m) => m.ChatsPageModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('../activity/activity.module').then(
            (m) => m.ActivityPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
