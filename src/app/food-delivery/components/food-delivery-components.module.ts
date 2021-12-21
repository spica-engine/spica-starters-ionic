import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FoodCardComponent } from './food-card/food-card.component';
import { FoodDetailsComponent } from './food-details/food-details.component';


@NgModule({
  declarations: [FoodCardComponent, FoodDetailsComponent],
  exports: [FoodCardComponent, FoodDetailsComponent],
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
export class FoodDeliveryComponentModule {}
