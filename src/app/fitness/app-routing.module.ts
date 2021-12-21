import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'teacher-page',
    loadChildren: () => import('./pages/teacher-page/teacher-page.module').then(m=> m.TeacherPagePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'branch-categories',
    loadChildren: () => import('./pages/branch-categories/branch-categories.module').then( m => m.BranchCategoriesPageModule)
  },
  {
    path: 'video-details',
    loadChildren: () => import('./pages/video-details/video-details.module').then( m => m.VideoDetailsPageModule)
  },
  {
    path: 'trainings',
    loadChildren: () => import('./pages/trainings/trainings.module').then( m => m.TrainingsPageModule)
  },
  {
    path: 'watched-videos-page',
    loadChildren: () => import('./pages/watched-videos-page/watched-videos-page.module').then( m => m.WatchedVideosPagePageModule)
  },
  {
    path: 'food-program',
    loadChildren: () => import('./pages/food-program/food-program.module').then( m => m.FoodProgramPageModule)
  },
  {
    path: 'food-program-detail',
    loadChildren: () => import('./pages/food-program-detail/food-program-detail.module').then( m => m.FoodProgramDetailPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnessRoutingModule {}
