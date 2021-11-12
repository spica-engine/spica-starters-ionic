import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ChatsPageRoutingModule } from './chats-routing.module';
import { ChatDetailPage } from '../chat-detail/chat-detail.page';
import { ChatSinglePage } from '../chat-single/chat-single.page';
import { ChatsPage } from './chats.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/social-media/components/components.module';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsPageRoutingModule,
    ComponentsModule,
    SpicaComponentsModule,
    TranslateModule.forChild()
  ],
  declarations:[
    ChatSinglePage,
    ChatsPage,
     ChatDetailPage
  ],
})
export class ChatsPageModule {}
