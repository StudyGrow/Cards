import { Component, isDevMode, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppState } from './models/state';
import { ThemesService } from './services/themes.service';
import { auth } from './store/actions/UserActions';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { CardsSortedAndFiltered, UserReports } from './store/selector';
import { CardsEffects } from './store/effects/effects';
import { Failure } from './store/actions/CardActions';
import { NotificationsService } from './services/notifications.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptioins$: Subscription[] = [];

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
    let language = localStorage.getItem('language');
    if (!language || (language != 'en' && language != 'de')) language = 'de';
    this.translate.setDefaultLang(language);
    this.themeManager.initTheme(); // initialize theme

    // log state only in development mode

    this.titleService.setTitle('Home');
  }

  ngOnInit(): void {
    if (isDevMode()) {
      const sub = this.store.select(UserReports).subscribe((a) => {
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
    const sub = this.actionState.login$.pipe(delay(3000)).subscribe((action) => {
      this.notifs.clearNotifications();
      if (action.type === Failure) {
        console.log(action.reason);

        this.cookies.open();
      }
    });
    this.subscriptioins$.push(sub);
  }

  ngOnDestroy(): void {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    // this.subscriptioins$.forEach((sub) => sub.unsubscribe());
  }
}
