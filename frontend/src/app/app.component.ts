import { Component, isDevMode, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppState } from './models/state';
import { NotificationsService } from './services/notifications.service';
import { ThemesService } from './services/themes.service';
import { Failure } from './store/actions/CardActions';
import { auth } from './store/actions/UserActions';
import { CardsEffects } from './store/effects/effects';
import { WarnMessage } from './models/Notification';
import { FirebaseError } from 'firebase/app';

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
    private actionState: CardsEffects,
    private themeManager: ThemesService,
    private notifs: NotificationsService,
    private translate: TranslateService
  ) {
    this.store.dispatch(auth({}));
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
  }

  ngOnInit(): void {
    let sub: Subscription;
    if (isDevMode()) {
      sub = this.store.subscribe((a) => {
        console.log(a);
      });
      this.subscriptioins$.push(sub);
    }

    sub = this.actionState.login$.pipe(delay(3000)).subscribe((action) => {
      this.notifs.clearNotifications();
      if (action.type === Failure) {
        let message = this.translate.instant('login.error.unknown');
        const reason = action.reason;
        if (reason instanceof FirebaseError) {
          message = this.translate.instant('login.error.firebase.' + reason.code);
        }

        this.notifs.addNotification(new WarnMessage(message));
        console.error(action.reason);
      }
    });
    this.subscriptioins$.push(sub);
  }
}
