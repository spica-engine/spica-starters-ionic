import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActivityPage } from "./activity.page";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ActivityPage,
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../social-profile/social-profile.module").then((m) => m.SocialProfilePageModule),
      },
      {
        path: "waiting-requests",
        loadChildren: () =>
          import("../waiting-requests/waiting-requests.module").then(
            (m) => m.WaitingRequestsPageModule
          ),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityPageRoutingModule {}
