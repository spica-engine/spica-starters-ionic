import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';

import { ForumRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FollowingsModalComponent } from './modals/followings-modal/followings-modal.component';
import { FollowersModalComponent } from './modals/followers-modal/followers-modal.component';

@NgModule({
  declarations: [FollowersModalComponent, FollowingsModalComponent,
  ],
  entryComponents: [],
  imports: [CommonModule, ForumRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [],
})
export class ForumModule {}
