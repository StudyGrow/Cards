import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OverviewComponent } from "./overview/overview.component";
import { ChangeProfileComponent } from "./change-profile/change-profile.component";
import { CardsOverviewComponent } from "./cards-overview/cards-overview.component";
import { ProfileComponent } from "./profile.component";

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
    children: [
      { path: "", redirectTo: "overview", pathMatch: "full" },
      { path: "overview", component: OverviewComponent },
      { path: "manage", component: ChangeProfileComponent },
      { path: "cards", component: CardsOverviewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
