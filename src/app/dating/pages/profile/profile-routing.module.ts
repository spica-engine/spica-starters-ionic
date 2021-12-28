import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProfilePage },
      {
        path: 'likes-you',
        loadChildren: () => import('../likes-you/likes-you.module').then( m => m.LikesYouPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
