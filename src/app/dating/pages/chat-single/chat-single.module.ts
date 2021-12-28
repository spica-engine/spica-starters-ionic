import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatSinglePageRoutingModule } from './chat-single-routing.module';

import { ChatSinglePage } from './chat-single.page';
import { DatingComponentModule } from '../../components/dating-components.module';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatSinglePageRoutingModule,
    DatingComponentModule,
    SpicaComponentsModule
  ],
  declarations: [ChatSinglePage]
})
export class ChatSinglePageModule {}
