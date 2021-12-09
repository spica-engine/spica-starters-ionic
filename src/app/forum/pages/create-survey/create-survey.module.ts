import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSurveyPageRoutingModule } from './create-survey-routing.module';

import { CreateSurveyPage } from './create-survey.page';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateSurveyPageRoutingModule,
    SpicaComponentsModule
  ],
  declarations: [CreateSurveyPage]
})
export class CreateSurveyPageModule {}
