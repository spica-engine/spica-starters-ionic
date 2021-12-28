import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailsPageRoutingModule } from './user-details-routing.module';

import { UserDetailsPage } from './user-details.page';
import { DatingComponentModule } from '../../components/dating-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDetailsPageRoutingModule,
    DatingComponentModule
  ],
  declarations: [UserDetailsPage]
})
export class UserDetailsPageModule {}
