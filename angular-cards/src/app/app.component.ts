import { Component, isDevMode } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from './models/state';
import { ThemesService } from './services/themes.service';
import { auth } from './store/actions/UserActions';
import { DisplayedCards } from './store/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme$: Observable<string>;
  cachedTheme: string;
  public constructor(
    private titleService: Title,
    private store: Store<AppState>,

    private themeManager: ThemesService
  ) {
    this.store.dispatch(auth());

    this.themeManager.initTheme(); //initialize theme

    if (isDevMode()) {
      this.store.select(DisplayedCards).subscribe((a) => {
        console.log(a);
      });
    }
    //log state only in development mode

    this.titleService.setTitle('Home');
  }
}
