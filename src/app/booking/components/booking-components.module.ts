import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SpicaComponentsModule } from 'src/app/components/components.module';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [FooterComponent, GalleryComponent, ReservationComponent],
  exports: [FooterComponent, GalleryComponent, ReservationComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
    SpicaComponentsModule,
  ],
  providers: [HttpClientModule],
})
export class BookingComponentModule {}
