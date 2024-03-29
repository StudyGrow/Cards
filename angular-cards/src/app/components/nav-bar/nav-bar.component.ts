import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Card } from '../../models/Card';
import { Router, NavigationEnd, RouterEvent, RoutesRecognized } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription, Observable, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';

import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { ACTIVE_INDEX, SORTED_AND_FILTERED_CARDS, SHOWN_CARDS, LOADING } from 'src/app/store/selector';
import { clearCardData } from 'src/app/store/actions/CardActions';
import { AppState, Data, Mode } from 'src/app/models/state';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';
import { resetCardsState } from 'src/app/store/actions/StateActions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  loggedIn: boolean;
  cards: Card[] = [];

  experiment = false;
  subscriptions$: Subscription[] = [];
  showSearch: boolean;
  loading: boolean;
  loading$: Observable<boolean>;
  progress$: Observable<number>;

  public constructor(
    private router: Router,
    private titleService: Title,
    private cdr: ChangeDetectorRef,
    private store: Store<AppState>,
    private nav: NavbarToggleService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      let sub = this.store.select(LOADING).subscribe((val) => {
        this.loading = val;
        this.cdr.detectChanges();
      });
      this.subscriptions$.push(sub);

      const cardCount$ = this.store.select(SORTED_AND_FILTERED_CARDS).pipe(map((cards) => cards?.length));
      // progress of carousel. will be undefined if there are no cards
      this.progress$ = combineLatest([this.store.select(ACTIVE_INDEX), cardCount$]).pipe(
        map(([curr, all]) => (all > 1 ? (curr / (all - 1)) * 100 : undefined))
      );

      sub = this.router.events.pipe(filter((e): e is RouterEvent => e instanceof RouterEvent)).subscribe((e) => {
        this.handleRouteChanges(e);
      });
      this.subscriptions$.push(sub);
    }, 1);
  }

  private handleRouteChanges(e: RouterEvent) {
    if (e instanceof RoutesRecognized) {
      this.nav.close(); // hide drawer when changing route
      this.setPageTitle(e);
      if (e.url.match(/vorlesung/)) {
        this.showSearch = true;
        // this.store.dispatch(fetchCards());
      } else {
        this.showSearch = false;
      }
    } else if (e instanceof NavigationEnd) {
      if (!e.url.match(/vorlesung/)) {
        this.store.dispatch(clearCardData());
        this.store.dispatch(resetCardsState()); // clear card data on store when leaving lecture route}
      }
    }
  }
  private updateTitle() {
    if (this.router.url.match(/account/)) {
      this.titleService.setTitle('Account');
    } else if (this.router.url == '/') {
      this.titleService.setTitle('Home');
    }
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  isActive(path: string): string {
    return path === this.router.url ? 'active' : '';
  }

  setPageTitle(e: RouterEvent): void {
    let currentTitle = 'Cards';

    switch (e.url) {
      case '/login':
        currentTitle = 'Login';
        break;
      case '/signup':
        currentTitle = 'Sign Up';
        break;
      case '/':
        currentTitle = 'Home';
        break;

      default:
        if (this.router.url.match(/account/)) {
          currentTitle = 'Account';
        }
        break;
    }
    this.titleService.setTitle(currentTitle);
  }
  drawerToggle() {
    this.nav.toggle();
  }
}
