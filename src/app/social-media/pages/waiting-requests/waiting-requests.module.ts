import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingRequestsPageRoutingModule } from './waiting-requests-routing.module';

import { WaitingRequestsPage } from './waiting-requests.page';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingRequestsPageRoutingModule,
    ComponentsModule,
    TranslateModule.forChild()
  ],
  declarations: [WaitingRequestsPage]
})
export class WaitingRequestsPageModule {}
