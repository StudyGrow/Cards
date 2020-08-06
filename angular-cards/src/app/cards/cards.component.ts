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

import { Observable, Subscription } from "rxjs";

import { map, tap, share } from "rxjs/operators";
import { fetchCards } from "../store/actions/cardActions";
import { fadeInOnEnterAnimation } from "angular-animations";
import { setSuggestionsMode } from "../store/actions/actions";
import { getCardsData, selectUserId } from "../store/selector";
import { AppState } from "../store/reducer";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
  animations: [fadeInOnEnterAnimation()],
})
export class CardsComponent implements OnInit, OnDestroy {
  public formMode: string;
  abrv: string;
  private subscriptions$: Subscription[] = [];
  @ViewChild("alert", { static: false }) alert: ElementRef;

  @HostListener("click", ["$event.target"])
  onClick() {
    this.store.dispatch(setSuggestionsMode({ hide: true }));
  }
  //holds data from store
  public data$: Observable<any> = this.store.select("cardsData").pipe(
    map(getCardsData),

    share()
  );

  public lecture$: Observable<Vorlesung> = this.data$.pipe(
    map((data) => data.currLecture)
  );

  constructor(private store: Store<any>, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("Cards");
    this.store.dispatch(fetchCards());

    let sub = this.store.select("cardsData").subscribe((state) => {
      this.formMode = state.formMode;
      if (this.abrv !== state.currLecture.abrv) {
        this.abrv = state.currLecture.abrv;
        console.log(this.abrv);
        if (this.abrv) {
          this.title.setTitle("Cards " + this.abrv.toUpperCase());
        }
      }
    });
    this.subscriptions$.push(sub);
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => sub.unsubscribe());
  }
}
