import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AdverstCardComponent } from './adverst-card/adverst-card.component';
import { ConsultantCardComponent } from './consultant-card/consultant-card.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';

@NgModule({
  declarations: [AdverstCardComponent, ConsultantCardComponent, FilterModalComponent],
  exports: [AdverstCardComponent, ConsultantCardComponent, FilterModalComponent],
  imports: [
  RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
  ],
  providers: [HttpClientModule],
})
export class RealEstateComponentModule {}
