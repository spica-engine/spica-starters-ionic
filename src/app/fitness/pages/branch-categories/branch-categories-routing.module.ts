import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BranchCategoriesPage } from './branch-categories.page';

const routes: Routes = [
  {
    path: ':id',
    children: [
      { path: '', component: BranchCategoriesPage, },
      {
        path: 'teacher-page',
        loadChildren: () => import('../teacher-page/teacher-page.module').then(m => m.TeacherPagePageModule)
      },
      {
        path: 'video-details',
        loadChildren: () => import('../video-details/video-details.module').then(m => m.VideoDetailsPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchCategoriesPageRoutingModule { }
