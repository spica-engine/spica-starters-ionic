import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendPage } from './friend.page';

const routes: Routes = [
  {

    path: '',
    children: [
      {
        path: ':userId',
        children: [
          {
            path: "",
            component: FriendPage,
          },
          {
            path: ':type',
            children: [
              {
                path: "",
                component: FriendPage
              },
              {
                path: "profile",
                loadChildren: () => import('../social-profile/social-profile.module').then(m => m.SocialProfilePageModule),
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendPageRoutingModule {}
