import { Component, isDevMode, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from './models/state';
import { ThemesService } from './services/themes.service';
import { auth } from './store/actions/UserActions';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

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
    private themeManager: ThemesService
  ) {
    this.store.dispatch(auth());

    this.themeManager.initTheme(); //initialize theme

    if (isDevMode()) {
      // this.store.pipe(map((state) => state.mode)).subscribe((mode) => {
      //   console.log(mode.currentCard);
      // });
    }
    //log state only in development mode

    this.titleService.setTitle('Home');
  }

  ngOnInit() {
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
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    // this.subscriptioins$.forEach((sub) => sub.unsubscribe());
  }
}
