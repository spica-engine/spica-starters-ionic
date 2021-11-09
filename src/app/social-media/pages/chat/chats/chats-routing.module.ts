import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDetailPage } from '../chat-detail/chat-detail.page';
import { ChatSinglePage } from '../chat-single/chat-single.page';
import { ChatsPage } from './chats.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ChatsPage,
      },
      {
        path: ':chat_id',
        children: [
          {
            path: '',
            component: ChatSinglePage,
          },
          {
            path: 'chat_detail',
            children: [
              { path: '', component: ChatDetailPage },
              {
                path: 'profile',
                loadChildren: () =>
                  import('../../social-profile/social-profile.module').then(
                    (m) => m.SocialProfilePageModule
                  ),
              },
            ],
          },
          {
            path: 'profile',
            loadChildren: () =>
              import('../../social-profile/social-profile.module').then(
                (m) => m.SocialProfilePageModule
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
export class ChatsPageRoutingModule {}
