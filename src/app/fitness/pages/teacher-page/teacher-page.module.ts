import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherPagePageRoutingModule } from './teacher-page-routing.module';

import { TeacherPagePage } from './teacher-page.page';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    TeacherPagePageRoutingModule,
    SpicaComponentsModule
  ],
  declarations: [TeacherPagePage]
})
export class TeacherPagePageModule {}
