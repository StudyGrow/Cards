import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

import { CardsOverviewComponent } from './cards-overview/cards-overview.component';
import { OverviewComponent } from './overview/overview.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChangeProfileComponent } from './change-profile/change-profile.component';
import { CardReportComponent } from './notifications/reports/card-report/card-report.component';
import { LectureReportComponent } from './notifications/reports/lecture-report/lecture-report.component';
import { UserReportComponent } from './notifications/reports/user-report/user-report.component';

@NgModule({
  declarations: [
    ProfileComponent,
    CardsOverviewComponent,
    OverviewComponent,
    NotificationsComponent,
    ChangeProfileComponent,
    CardReportComponent,
    LectureReportComponent,
    UserReportComponent,
  ],
  imports: [ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
