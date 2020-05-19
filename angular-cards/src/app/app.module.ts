//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injectable, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import {
  CarouselModule,
  WavesModule,
  CollapseModule,
  TooltipModule,
} from "angular-bootstrap-md";
import { KatexModule } from "ng-katex";

//Components
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { AddCardFormComponent } from "./components/add-card-form/add-card-form.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CardComponent } from "./components/card/card.component";
import { AddLectureFormComponent } from "./components/add-lecture-form/add-lecture-form.component";
import { LecturesComponent } from "./components/lectures/lectures.component";
import { HomePageComponent } from "./routes/home-page/home-page.component";
import { CardsPageComponent } from "./routes/cards-page/cards-page.component";
//Services
import { StatesService } from "./services/states.service";
import { HttpService } from "./services/http.service";

//Material Modules
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UpdateCardFormComponent } from "./components/update-card-form/update-card-form.component";
//Gestures
import {
  HammerModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from "@angular/platform-browser";
import { LoginPageComponent } from "./routes/login-page/login-page.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { SignupPageComponent } from "./routes/signup-page/signup-page.component";
import { SignupFormComponent } from "./components/signup-form/signup-form.component";
import { StoreModule } from "@ngrx/store";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./routes/about/about.component";
import { AccountPageComponent } from "./routes/account-page/account-page.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { ChangeProfileComponent } from "./components/change-profile/change-profile.component";
import { CardsOverviewComponent } from "./components/cards-overview/cards-overview.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";

//Localization
import { registerLocaleData } from "@angular/common";
import de from "@angular/common/locales/de";

// the second parameter 'fr-FR' is optional
registerLocaleData(de);

declare var Hammer: any;
//Config to allow swipe gestures on carousel
@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pan: { direction: Hammer.DIRECTION_All },
    swipe: { direction: Hammer.DIRECTION_VERTICAL },
  };

  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: "auto",
      inputClass: Hammer.SUPPORT_POINTER_EVENTS
        ? Hammer.PointerEventInput
        : Hammer.TouchInput,
      recognizers: [
        [
          Hammer.Swipe,
          {
            direction: Hammer.DIRECTION_HORIZONTAL,
          },
        ],
      ],
    });
    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    AddCardFormComponent,
    CarouselComponent,
    CardComponent,
    AddLectureFormComponent,
    LecturesComponent,
    HomePageComponent,
    CardsPageComponent,
    UpdateCardFormComponent,
    LoginPageComponent,
    LoginFormComponent,
    SignupPageComponent,
    SignupFormComponent,
    FooterComponent,
    AboutComponent,
    AccountPageComponent,
    OverviewComponent,
    ChangeProfileComponent,
    CardsOverviewComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatDialogModule,
    CarouselModule,
    WavesModule,
    HammerModule,
    CollapseModule,
    TooltipModule,
    StoreModule.forRoot({}, {}),
    KatexModule,
  ],
  providers: [
    StatesService,
    HttpService,
    { provide: LOCALE_ID, useValue: "de" },

    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
