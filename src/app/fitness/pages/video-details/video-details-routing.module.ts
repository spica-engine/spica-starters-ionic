import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoDetailsPage } from './video-details.page';

const routes: Routes = [
  {
    path: ':id',
    children: [
      { path: '', component: VideoDetailsPage },
      {
        path: 'teacher-page',
        loadChildren: () =>
          import('../teacher-page/teacher-page.module').then(
            (m) => m.TeacherPagePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoDetailsPageRoutingModule {}
