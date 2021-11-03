import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':userId',
        children: [
          {
            path: '',
            component: ProfilePage,
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
          }
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
