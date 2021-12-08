import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SpicaComponentsModule } from 'src/app/components/components.module';
import { JobCardComponent } from './job-card/job-card.component';
import { CreateAdvertComponent } from './create-advert/create-advert.component';
import { JobAppliesComponent } from './job-applies/job-applies.component';

@NgModule({
  declarations: [JobCardComponent, CreateAdvertComponent, JobAppliesComponent],
  exports: [JobCardComponent, CreateAdvertComponent, JobAppliesComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    IonicModule,
    SpicaComponentsModule,
  ],
  providers: [HttpClientModule],
})
export class JobPortalComponentModule {}
