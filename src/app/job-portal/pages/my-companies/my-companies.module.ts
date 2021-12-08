import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCompaniesPageRoutingModule } from './my-companies-routing.module';

import { MyCompaniesPage } from './my-companies.page';
import { JobPortalComponentModule } from '../../components/job-portal-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCompaniesPageRoutingModule,
    JobPortalComponentModule
  ],
  declarations: [MyCompaniesPage]
})
export class MyCompaniesPageModule {}
