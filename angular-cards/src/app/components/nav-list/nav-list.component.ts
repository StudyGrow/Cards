import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, map, take } from 'rxjs/operators';
import { authorized } from 'src/app/store/selector';
import { Observable, Subscription } from 'rxjs';
import { logout as logoutUser } from 'src/app/store/actions/UserActions';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemesService } from 'src/app/services/themes.service';
import { AppState, Data, Mode } from 'src/app/models/state';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent implements OnInit {
  loggedIn$: Observable<boolean>;
  theme$: Observable<string>;
  sub: Subscription;
  @ViewChild('darkmode') toggle: MatSlideToggle;

  constructor(private router: Router, private store: Store, private themeManager: ThemesService) {}

  ngOnInit(): void {
    this.theme$ = this.themeManager.currentTheme;
    this.loggedIn$ = this.store.select(authorized);
  }

  ngAfterViewInit() {
    this.theme$.pipe(take(1)).subscribe((theme) => {
      //initially set the toggle state
      if (theme === 'dark-theme' && this.toggle && !this.toggle.checked) {
        this.toggle.toggle();
      }
    });
  }

  /**
   * toggles the Theme of the app
   * @param e
   */
  toggleDarkMode(e: MatSlideToggleChange) {
    let theme = e.checked ? 'dark-theme' : 'default'; //theme which should be switched
    this.themeManager.changeTheme(theme, true);
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
    return this.router.url.includes(path) ? 'active' : '';
  }
}
