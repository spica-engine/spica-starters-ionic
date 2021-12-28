import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikesYouPageRoutingModule } from './likes-you-routing.module';

import { LikesYouPage } from './likes-you.page';
import { DatingComponentModule } from '../../components/dating-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikesYouPageRoutingModule,
    DatingComponentModule
  ],
  declarations: [LikesYouPage]
})
export class LikesYouPageModule {}
