import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRentsPageRoutingModule } from './user-rents-routing.module';

import { UserRentsPage } from './user-rents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRentsPageRoutingModule
  ],
  declarations: [UserRentsPage]
})
export class UserRentsPageModule {}
