import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SpicaComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [],
  exports: [],
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
