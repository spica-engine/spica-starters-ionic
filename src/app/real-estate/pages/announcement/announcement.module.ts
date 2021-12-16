import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncementPageRoutingModule } from './announcement-routing.module';

import { AnnouncementPage } from './announcement.page';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnouncementPageRoutingModule,
    SpicaComponentsModule
  ],
  declarations: [AnnouncementPage]
})
export class AnnouncementPageModule {}
