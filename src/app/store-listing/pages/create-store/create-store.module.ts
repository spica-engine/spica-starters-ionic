import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateStorePageRoutingModule } from './create-store-routing.module';

import { CreateStorePage } from './create-store.page';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateStorePageRoutingModule,
    SpicaComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [CreateStorePage]
})
export class CreateStorePageModule {}
