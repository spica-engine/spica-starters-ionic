import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatchedVideosPagePage } from './watched-videos-page.page';

const routes: Routes = [
  {
    path: ':id',
    // component: WatchedVideosPagePage
    children: [
      { path: '', component: WatchedVideosPagePage },
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
export class WatchedVideosPagePageRoutingModule {}
