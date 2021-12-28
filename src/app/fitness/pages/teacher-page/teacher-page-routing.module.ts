import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherPagePage } from './teacher-page.page';

const routes: Routes = [
  {
    path: ':id',
    children: [
      { path: '', component: TeacherPagePage },
      {
        path: 'video-details',
        loadChildren: () =>
          import('../video-details/video-details.module').then(
            (m) => m.VideoDetailsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPagePageRoutingModule {}
