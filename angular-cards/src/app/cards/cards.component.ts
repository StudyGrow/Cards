import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Vorlesung } from "src/app/models/Vorlesung";

import { Title } from "@angular/platform-browser";
import { Card } from "../models/Card";
import { StatesService } from "../services/states.service";
import { select, Store } from "@ngrx/store";

import { Observable } from "rxjs";
import { AppState, CardsData } from "../store/reducer";
import { map, tap, share } from "rxjs/operators";
import { fetchCards } from "../store/actions/cardActions";
import { fadeInOnEnterAnimation } from "angular-animations";
import { setSuggestionsMode } from "../store/actions/actions";
import { getCardsData, selectUserId } from "../store/selector";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"],
  animations: [fadeInOnEnterAnimation()],
})
export class CardsComponent implements OnInit {
  public vlAbrv: string;

  public loading: boolean = true;
  public formMode: string;
  public data$: Observable<any> = this.store
    .select(
      //holds cards data from store
      "cardsData"
    )
    .pipe(
      tap((data) => {
        console.log(data.loading);
      }),
      map(getCardsData),

      share()
    );

  public cards$: Observable<Card[]> = this.data$.pipe(
    map((data) => data.cards)
  );
  public lecture$: Observable<Vorlesung> = this.data$.pipe(
    map((data) => data.currLecture)
  );
  public uid$: Observable<string> = this.store.pipe(map(selectUserId));

  private inTypingField: boolean;
  @ViewChild("alert", { static: false }) alert: ElementRef;

  @HostListener("click", ["$event.target"])
  onClick() {
    this.store.dispatch(setSuggestionsMode({ hide: true }));
  }
  constructor(
    private route: ActivatedRoute,
    private stateServie: StatesService,
    private store: Store<any>,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Cards");
    this.vlAbrv = this.route.snapshot.paramMap.get("abrv");

    this.store.dispatch(fetchCards());
    this.store
      .select("cardsData")
      .pipe(map((state) => state.typingMode))
      .subscribe((val) => {
        this.inTypingField = val;
      });

    this.store
      .select("cardsData")
      .pipe(map((state) => state.formMode))
      .subscribe((mode) => {
        this.formMode = mode;
      });
  }
}
