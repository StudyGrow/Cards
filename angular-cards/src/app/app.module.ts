//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injectable, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

//Material Modules
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatIconModule } from "@angular/material/icon";

//Gestures
import {
  HammerModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from "@angular/platform-browser";

//Localization
import { registerLocaleData } from "@angular/common";
import de from "@angular/common/locales/de";
registerLocaleData(de);

//Components
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

import { AddLectureFormComponent } from "./components/add-lecture-form/add-lecture-form.component";
import { LecturesComponent } from "./components/lectures/lectures.component";
import { HomePageComponent } from "./routes/home-page/home-page.component";

import { LoginPageComponent } from "./routes/login-page/login-page.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { SignupPageComponent } from "./routes/signup-page/signup-page.component";
import { SignupFormComponent } from "./components/signup-form/signup-form.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./routes/about/about.component";

import { ErrorPageComponent } from "./routes/error-page/error-page.component";

import { FilterTagsComponent } from "./components/filter-tags/filter-tags.component";

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

    AddLectureFormComponent,
    LecturesComponent,
    HomePageComponent,

    LoginPageComponent,
    LoginFormComponent,
    SignupPageComponent,
    SignupFormComponent,
    FooterComponent,
    AboutComponent,

    ErrorPageComponent,

    FilterTagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,

    MatInputModule,
    MatMenuModule,

    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSelectModule,

    HammerModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "de" },

    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
