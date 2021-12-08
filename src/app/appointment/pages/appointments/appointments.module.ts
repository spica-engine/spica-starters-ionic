import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentsPageRoutingModule } from './appointments-routing.module';

import { AppointmentsPage } from './appointments.page';
import { AppointmentComponentModule } from '../../components/appointment-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentsPageRoutingModule,
    AppointmentComponentModule
  ],
  declarations: [AppointmentsPage]
})
export class AppointmentsPageModule {}
