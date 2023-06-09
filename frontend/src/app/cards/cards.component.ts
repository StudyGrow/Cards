import { Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Lecture } from 'src/app/models/Vorlesung';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable, Subscription, firstValueFrom } from 'rxjs';
import { map, take, timeout, combineLatestWith } from 'rxjs/operators';
import { fetchCards } from '../store/actions/CardActions';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { changeTab, setSuggestionsMode, showNewCard } from '../store/actions/StateActions';
import {
  AUTHORIZED,
  SELECTED_TAB,
  CARDS_DATA_OBJECT,
  SELECTED_LECTURE,
  CURRENT_CARD,
  FORM_MODE,
  HIDE_CARD_SEARCH_RESULTS,
} from '../store/selectors/selector';
import { AppState } from '../models/State';
import { TranslateService } from '@ngx-translate/core';
import { Card } from '../models/Card';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [fadeInOnEnterAnimation()],
})
export class CardsComponent implements OnInit, OnDestroy {
  formMode: string;
  hideSuggestion: boolean;
  selectedTab$: Observable<number>;
  vlName: string;
  private subscriptions$: Subscription[] = [];
  @ViewChild('alert', { static: false }) alert: ElementRef;

  @HostListener('click', ['$event.target'])
  onClick() {
    if (!this.hideSuggestion) {
      this.store.dispatch(setSuggestionsMode({ hide: true }));
    }
  }
  @HostListener('window:beforeunload', ['$event.target'])
  onUnload() {
    this.ngOnDestroy();
  }
  // holds data from store
  public data$: Observable<any> = this.store.select(CARDS_DATA_OBJECT);
  authorized$ = this.store.select(AUTHORIZED);

  public lecture$: Observable<Lecture> = this.data$.pipe(map((data) => data.currLecture));

  constructor(
    private store: Store<AppState>,
    private title: Title,
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Cards');

    this.store.dispatch(fetchCards());

    this.selectedTab$ = this.store.select(SELECTED_TAB);

    let sub = this.store
      .select(FORM_MODE)
      .pipe(combineLatestWith(this.store.select(HIDE_CARD_SEARCH_RESULTS)))
      .subscribe(([mode, hideSearchResults]) => {
        if (mode !== this.formMode) {
          this.formMode = mode;
        }
        this.hideSuggestion = hideSearchResults;
      });
    this.subscriptions$.push(sub);
    sub = this.data$.subscribe((state) => {
      if (this.vlName !== state.currLecture?.name) {
        this.vlName = state.currLecture.name;

        if (this.vlName) {
          this.title.setTitle('Cards · ' + this.vlName);
        }
      }
    });
    this.subscriptions$.push(sub);
    setTimeout(async () => {
      const currentLecture = await this.store.select(SELECTED_LECTURE).pipe(take(1)).toPromise();
      if (currentLecture) {
        const card = JSON.parse(localStorage.getItem(currentLecture._id)) as Card;
        if (card) {
          this.openSnackBar(card);
        }
      }
    }, 500);
  }

  setActiveTab(index: number) {
    this.store.dispatch(changeTab({ tab: index }));
  }

  async openSnackBar(card: Card) {
    const message = this.translate.instant('notifications.pick-up');
    await firstValueFrom(
      this._snackBar
        .open(message, this.translate.instant('yes'), { duration: 5000, politeness: 'assertive' })
        .onAction()
        .pipe(take(1), timeout(6000))
    );

    this.store.dispatch(showNewCard({ card: card }));
    const currentLecture = await this.store.select(SELECTED_LECTURE).pipe(take(1)).toPromise();
    localStorage.removeItem(currentLecture._id);
  }

  async ngOnDestroy() {
    this.subscriptions$.forEach((sub) => sub.unsubscribe());
    const currentLecture = await this.store.select(SELECTED_LECTURE).pipe(take(1)).toPromise();
    const currentCard = await this.store.select(CURRENT_CARD).pipe(take(1)).toPromise();
    if (currentCard) {
      localStorage.setItem(currentLecture._id, JSON.stringify(currentCard));
    }
  }
}
