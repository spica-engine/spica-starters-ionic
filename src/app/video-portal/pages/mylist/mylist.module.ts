import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MylistPageRoutingModule } from './mylist-routing.module';

import { MylistPage } from './mylist.page';
import { VideoPortalComponentModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MylistPageRoutingModule,
    VideoPortalComponentModule
  ],
  declarations: [MylistPage]
})
export class MylistPageModule {}
