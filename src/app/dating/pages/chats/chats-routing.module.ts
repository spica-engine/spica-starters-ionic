import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatSinglePage } from '../chat-single/chat-single.page';

import { ChatsPage } from './chats.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ChatsPage,
      },
      {
        path: ':chat_id',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../chat-single/chat-single.module').then(
              (m) => m.ChatSinglePageModule
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
export class ChatsPageRoutingModule {}
