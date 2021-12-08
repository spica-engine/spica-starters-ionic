import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { AppointmentCardComponent } from './appointment-card/appointment-card.component';
import { NgCalendarModule } from 'ionic2-calendar';
import { CustomCalendarComponent } from './custom-calendar/custom-calendar.component';
import { ClientModalComponent } from './client-modal/client-modal.component';

@NgModule({
  declarations: [CreateAppointmentComponent, AppointmentCardComponent, CustomCalendarComponent, ClientModalComponent],
  exports: [CreateAppointmentComponent, AppointmentCardComponent, CustomCalendarComponent, ClientModalComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
    NgCalendarModule
  ],
  providers: [HttpClientModule],
})
export class AppointmentComponentModule {}
