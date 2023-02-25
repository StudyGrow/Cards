// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';

// GraphQL
import { Apollo } from 'apollo-angular';
import { WebSocketLink } from '@apollo/client/link/ws';
import { InMemoryCache } from '@apollo/client/core';

// Material Modules
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';

// Gestures
import { HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

// Reducers
import { dataReducer } from './store/reducers/data.reducer';
import { modeReducer } from './store/reducers/mode.reducer';

// Effects
import { EffectsModule } from '@ngrx/effects';
import { CardsEffects } from './store/effects/effects';

// Localization
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';

registerLocaleData(de);

// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupPageComponent } from './routes/signup-page/signup-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AboutComponent } from './routes/about/about.component';
import { ErrorPageComponent } from './routes/error-page/error-page.component';
import { ConfirmationPageComponent } from './routes/confirmation-page/confirmation-page.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { ViewContainerComponent } from './components/view-container/view-container.component';
import { HomeModule } from './home/home.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoadingInterceptorService } from './services/loading-interceptor.service';

// NG-Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Cookie Consent
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { cookieConfig } from './cookie.config';
import { GoogleLoginButtonComponent } from './components/google-login-button/google-login-button.component';
import { GoogleCallbackComponent } from './components/google-callback/google-callback.component';

// NGX Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GraphQLModule } from './graphql.module';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { GraphqlInterceptorService } from './services/graphql.interceptor.service';

declare const Hammer: any;
// Config to allow swipe gestures on carousel
@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    pan: { direction: Hammer.DIRECTION_All },
    swipe: { direction: Hammer.DIRECTION_VERTICAL },
  };

  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'auto',
      inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
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
    AboutComponent,
    ErrorPageComponent,
    ConfirmationPageComponent,
    ConfirmationComponent,
    NavListComponent,
    ViewContainerComponent,
    GoogleLoginButtonComponent,
    GoogleCallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MatProgressBarModule,
    MatSidenavModule,
    HammerModule,
    HomeModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

          // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          // [{ font: [] }],
        ],
      },
    }),
    StoreModule.forRoot({ data: dataReducer, mode: modeReducer }),
    EffectsModule.forRoot([CardsEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    NgcCookieConsentModule.forRoot(cookieConfig),
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    GraphQLModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GraphqlInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: 'de' },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
