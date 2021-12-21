import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityDetailsPageRoutingModule } from './activity-details-routing.module';

import { ActivityDetailsPage } from './activity-details.page';
import { BookingComponentModule } from '../../components/booking-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityDetailsPageRoutingModule,
    BookingComponentModule
  ],
  declarations: [ActivityDetailsPage]
})
export class ActivityDetailsPageModule {}
