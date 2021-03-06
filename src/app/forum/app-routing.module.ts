import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./pages/home/home.module').then((m) => m.HomePageModule),
  // },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'survey',
    loadChildren: () =>
      import('./pages/survey/survey.module').then((m) => m.SurveyPageModule),
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./pages/authorization/authorization.module').then(
        (m) => m.AuthorizationPageModule
      ),
  },
  {
    path: 'create-forum',
    loadChildren: () =>
      import('./pages/create-forum/create-forum.module').then(
        (m) => m.CreateForumPageModule
      ),
  },
  {
    path: 'create-survey',
    loadChildren: () =>
      import('./pages/create-survey/create-survey.module').then(
        (m) => m.CreateSurveyPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumRoutingModule {}
