import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialProfilePage } from './social-profile.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':userId',
        children: [
          {
            path: '',
            component: SocialProfilePage,
          },
          {
            path: 'friends',
            loadChildren: () =>
              import('../friend/friend.module').then((m) => m.FriendPageModule),
          },
          {
            path: 'settings',
            loadChildren: () =>
              import('../settings/settings.module').then(
                (m) => m.SettingsPageModule
              ),
          },
          {
            path: 'profile-edit',
            loadChildren: () =>
              import('../profile-edit/profile-edit.module').then(
                (m) => m.ProfileEditPageModule
              ),
          },
          {
            path: 'chats',
            loadChildren: () =>
              import('../chat/chats/chats.module').then(
                (m) => m.ChatsPageModule
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
export class SocialProfilePageRoutingModule {}
