import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketPageRoutingModule } from './basket-routing.module';

import { BasketPage } from './basket.page';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketPageRoutingModule,
    SpicaComponentsModule
  ],
  declarations: [BasketPage]
})
export class BasketPageModule {}
