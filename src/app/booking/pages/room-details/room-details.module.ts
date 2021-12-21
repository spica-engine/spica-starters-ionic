import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomDetailsPageRoutingModule } from './room-details-routing.module';

import { RoomDetailsPage } from './room-details.page';
import { BookingComponentModule } from '../../components/booking-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomDetailsPageRoutingModule,
    BookingComponentModule,
  ],
  declarations: [RoomDetailsPage,]
})
export class RoomDetailsPageModule {}
