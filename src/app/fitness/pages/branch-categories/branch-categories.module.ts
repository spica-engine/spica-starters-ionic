import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BranchCategoriesPageRoutingModule } from './branch-categories-routing.module';

import { BranchCategoriesPage } from './branch-categories.page';
import { FitnessComponentModule } from './../../components/fitness-components.module';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
CommonModule,
    FormsModule,
    IonicModule,
    BranchCategoriesPageRoutingModule,
    FitnessComponentModule,
    SpicaComponentsModule
  ],
  declarations: [BranchCategoriesPage]
})
export class BranchCategoriesPageModule {}
