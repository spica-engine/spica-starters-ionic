import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarcksPageRoutingModule } from './tarcks-routing.module';

import { TarcksPage } from './tarcks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarcksPageRoutingModule
  ],
  declarations: [TarcksPage]
})
export class TarcksPageModule {}
