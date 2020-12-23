//Core Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injectable, LOCALE_ID, Renderer2 } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { StoreModule } from "@ngrx/store";

//Dev Module
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

//Material Modules
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { MatSelectModule } from "@angular/material/select";

import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";

import { MatDividerModule } from "@angular/material/divider";
//Gestures
import {
  HammerModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from "@angular/platform-browser";

//Reducers
import { dataReducer } from "./store/reducers/data.reducer";
import { modeReducer } from "./store/reducers/mode.reducer";

//Effects
import { EffectsModule } from "@ngrx/effects";
import { CardsEffects } from "./store/effects/effects";

//Localization
import { registerLocaleData } from "@angular/common";
import de from "@angular/common/locales/de";
registerLocaleData(de);

//Components
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

import { LoginPageComponent } from "./routes/login-page/login-page.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { SignupPageComponent } from "./routes/signup-page/signup-page.component";
import { SignupFormComponent } from "./components/signup-form/signup-form.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./routes/about/about.component";

import { ErrorPageComponent } from "./routes/error-page/error-page.component";

import { ConfirmationPageComponent } from "./routes/confirmation-page/confirmation-page.component";
import { ConfirmationComponent } from "./components/confirmation/confirmation.component";
import { NavListComponent } from "./components/nav-list/nav-list.component";
import { ViewContainerComponent } from "./components/view-container/view-container.component";
import { HomeModule } from "./home/home.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

import { LoadingInterceptorService } from "./services/loading-interceptor.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

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
    LoginPageComponent,
    LoginFormComponent,
    SignupPageComponent,
    SignupFormComponent,
    FooterComponent,
    AboutComponent,
    ErrorPageComponent,
    ConfirmationPageComponent,
    ConfirmationComponent,
    NavListComponent,
    ViewContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatMenuModule,
    MatSelectModule,
    HammerModule,
    HomeModule,
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    StoreModule.forRoot({ data: dataReducer, mode: modeReducer }),
    EffectsModule.forRoot([CardsEffects]),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: "de" },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
