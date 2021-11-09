import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WaitingRequestsPage } from "./waiting-requests.page";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: WaitingRequestsPage,
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../social-profile/social-profile.module").then((m) => m.SocialProfilePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingRequestsPageRoutingModule {}
