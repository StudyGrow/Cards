import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";

import { Vorlesung } from "src/app/models/Vorlesung";

import { Title } from "@angular/platform-browser";
import { Card } from "../models/Card";

import { Store } from "@ngrx/store";

import { Observable, of, Subscription } from "rxjs";

import { map, tap, share, startWith } from "rxjs/operators";
import { fetchCards, clearCardData } from "../store/actions/cardActions";
import { fadeInOnEnterAnimation } from "angular-animations";
import { changeTab, setSuggestionsMode } from "../store/actions/actions";
import { getCardsData, selectCurrentTab } from "../store/selector";
import { AppState } from "../store/reducer";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
  animations: [fadeInOnEnterAnimation()],
})
export class CardsComponent implements OnInit, OnDestroy {
  formMode: string;
  selectedTab$: Observable<number>;
  vlName: string;
  private subscriptions$: Subscription[] = [];
  @ViewChild("alert", { static: false }) alert: ElementRef;

  @HostListener("click", ["$event.target"])
  onClick() {
    this.store.dispatch(setSuggestionsMode({ hide: true }));
  }
  //holds data from store
  public data$: Observable<any> = this.store
    .select("cardsData")
    .pipe(map(getCardsData), share());

  public lecture$: Observable<Vorlesung> = this.data$.pipe(
    map((data) => data.currLecture)
  );

  constructor(private store: Store<any>, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("Cards");
    this.store.dispatch(fetchCards());
    this.selectedTab$ = this.store
      .select("cardsData")
      .pipe(map(selectCurrentTab));
    let sub = this.store.select("cardsData").subscribe((state) => {
      if (state.formMode !== this.formMode) {
        this.formMode = state.formMode;
      }
      if (this.vlName !== state.currLecture.name) {
        this.vlName = state.currLecture.name;

        if (this.vlName) {
          this.title.setTitle("Cards · " + this.titleCase(this.vlName));
        }
      }
    });
    this.subscriptions$.push(sub);
  }

  setActiveTab(index: number) {
    this.store.dispatch(changeTab({ tab: index }));
  }

  titleCase(str: string) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => sub.unsubscribe());
  }
}
