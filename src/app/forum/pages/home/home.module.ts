import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { DateAgoPipe } from './../../pipes/date-ago.pipe';
import { HomePage } from './home.page';

@NgModule({
  imports: [
  
  CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,DateAgoPipe]
})
export class HomePageModule {}
