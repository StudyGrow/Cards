import { Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Vorlesung } from 'src/app/models/Vorlesung';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { fetchCards } from '../store/actions/CardActions';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { changeTab, setSuggestionsMode } from '../store/actions/StateActions';
import { authorized, CurrentTab, getCardsData } from '../store/selector';
import { AppState } from '../models/state';
import { NotificationsService } from '../services/notifications.service';
import { WarnMessage } from '../models/Notification';
import { TranslateService } from '@ngx-translate/core';

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
  //holds data from store
  public data$: Observable<any> = this.store.select(getCardsData);
  authorized$ = this.store.select(authorized);

  public lecture$: Observable<Vorlesung> = this.data$.pipe(map((data) => data.currLecture));

  constructor(
    private store: Store<AppState>,
    private title: Title,
    private notifs: NotificationsService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Cards');

    this.store.dispatch(fetchCards());

    this.selectedTab$ = this.store.select(CurrentTab);

    let sub = this.store.select('mode').subscribe((state) => {
      if (state.formMode !== this.formMode) {
        this.formMode = state.formMode;
      }

      this.hideSuggestion = state.hideSearchResults;
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
  }

  setActiveTab(index: number) {
    this.store.dispatch(changeTab({ tab: index }));
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => sub.unsubscribe());
  }
}
