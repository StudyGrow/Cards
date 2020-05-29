import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";

import { CardsOverviewComponent } from "./cards-overview/cards-overview.component";
import { OverviewComponent } from "./overview/overview.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { ChangeProfileComponent } from "./change-profile/change-profile.component";

@NgModule({
  declarations: [
    ProfileComponent,
    CardsOverviewComponent,
    OverviewComponent,
    NotificationsComponent,
    ChangeProfileComponent,
  ],
  imports: [ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
