import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { SpicaComponentsModule } from 'src/app/components/components.module';
import { ForumComponentModule } from '../../components/forum-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    SpicaComponentsModule,
    ForumComponentModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
