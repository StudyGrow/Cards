import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { AUTHORIZED } from 'src/app/store/selector';
import { Observable, Subscription } from 'rxjs';
import { logout as logoutUser } from 'src/app/store/actions/UserActions';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ThemesService } from 'src/app/services/themes.service';
import { FormControl } from '@angular/forms';
import { Theme } from 'src/app/models/Themes';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent implements OnInit {
  loggedIn$: Observable<boolean>;
  theme$: Observable<string>;
  theme = new FormControl('');
  lang = new FormControl('');
  sub: Subscription;
  @ViewChild('darkmode') toggle: MatSlideToggle;

  constructor(
    private router: Router,
    private store: Store,
    private themeManager: ThemesService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.theme$ = this.themeManager.themeValue.pipe(map((theme) => Theme[theme]));
    this.loggedIn$ = this.store.select(AUTHORIZED);
    this.theme.valueChanges.subscribe((value) => {
      this.themeManager.changeTheme(value);
    });
    const lang = localStorage.getItem('language');
    if (lang) {
      this.lang.setValue(lang);
    }
    this.lang.valueChanges.subscribe((language) => {
      this.switchLanguage(language);
    });
  }

  ngAfterViewInit() {
    this.theme$.pipe(take(1)).subscribe((theme) => {
      // initially select the value in the list
      this.theme.setValue(theme);
    });
  }

  private switchLanguage(language?: string): void {
    if (!language) language = 'en';
    localStorage.setItem('language', language);
    this.translate.use(language);
  }
  /**
   * Logout the user from the site
   */
  logout() {
    this.store.dispatch(logoutUser());
  }

  /**
   * Checks if a path is active. A path is active if it is contained in the current url
   * @param path the path to check
   * @returns "active" if the path is active else ""
   */
  isActive(path: string): string {
    return this.router.url === path ? 'active' : '';
  }
}
