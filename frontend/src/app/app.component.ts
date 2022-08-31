import { Component, isDevMode, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppState } from './models/state';
import { ThemesService } from './services/themes.service';
import { auth } from './store/actions/UserActions';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { CardsEffects } from './store/effects/effects';
import { Failure } from './store/actions/CardActions';
import { NotificationsService } from './services/notifications.service';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private subscriptioins$: Subscription[] = [];
  private SUPPORTED_LANGUAGES = {
    en: 'english',
    de: 'german',
  };
  public constructor(
    private titleService: Title,
    private store: Store<AppState>,
    private cookies: NgcCookieConsentService,
    private actionState: CardsEffects,
    private themeManager: ThemesService,
    private notifs: NotificationsService,
    private translate: TranslateService
  ) {
    this.store.dispatch(auth());
    let language = localStorage.getItem('language'); // language set specifically by the user

    if (!language) {
      // try to determine language from navigator preference
      language = navigator.language;
      if (navigator.language.includes('-')) {
        language = navigator.language.split('-')[0];
      }
    }

    // check if selected language is supported
    if (!language || !(language in this.SUPPORTED_LANGUAGES)) {
      language = 'de';
    }
    this.translate.setDefaultLang(language);
    this.themeManager.initTheme(); // initialize theme

    // log state only in development mode

    this.titleService.setTitle('Home');

    firstValueFrom(
      this.translate.get(['cookies.uses_cookies', 'cookies.allow', 'cookies.deny', 'cookies.policy'])
    ).then((data) => {
      this.cookies.getConfig().content = this.cookies.getConfig().content || {};
      // Override default messages with the translated ones
      this.cookies.getConfig().content.message = data['cookies.uses_cookies'];
      this.cookies.getConfig().content.allow = data['cookies.allow'];
      this.cookies.getConfig().content.deny = data['cookies.deny'];
      this.cookies.getConfig().content.policy = data['cookies.policy'];

      this.cookies.destroy(); // remove previous cookie bar (with default messages)
      this.cookies.init(this.cookies.getConfig()); // update config with translated messages
    });
  }

  ngOnInit(): void {
    let sub: Subscription;
    if (isDevMode()) {
      sub = this.store.subscribe((a) => {
        console.log(a);
      });
      this.subscriptioins$.push(sub);
    }
    // let sub = this.cookies.popupOpen$.subscribe(() => {
    //   // you can use this.cookies.getConfig() to do stuff...
    // });
    // this.subscriptioins$.push(sub);
    // sub = this.cookies.popupClose$.subscribe(() => {
    //   // you can use this.cookies.getConfig() to do stuff...
    // });
    // this.subscriptioins$.push(sub);
    // sub = this.cookies.initialize$.subscribe((event: NgcInitializeEvent) => {
    //   // you can use this.cookies.getConfig() to do stuff...
    // });
    // this.subscriptioins$.push(sub);
    // sub = this.cookies.statusChange$.subscribe((event: NgcStatusChangeEvent) => {
    //   // you can use this.cookies.getConfig() to do stuff...
    // });
    // this.subscriptioins$.push(sub);
    // sub = this.cookies.revokeChoice$.subscribe(() => {
    //   // you can use this.cookies.getConfig() to do stuff...
    // });
    // this.subscriptioins$.push(sub);
    // sub = this.cookies.noCookieLaw$.subscribe((event: NgcNoCookieLawEvent) => {
    //   // you can use this.cookies.getConfig() to do stuff...
    // });
    // this.subscriptioins$.push(sub);
    sub = this.actionState.login$.pipe(delay(3000)).subscribe((action) => {
      this.notifs.clearNotifications();
      if (action.type === Failure) {
        console.log(action.reason);

        this.cookies.open();
      }
    });
    this.subscriptioins$.push(sub);
  }
}
