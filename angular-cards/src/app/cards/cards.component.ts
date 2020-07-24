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
import { fetchCards } from "../store/actions/actions";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"],
})
export class CardsComponent implements OnInit {
  public vlAbrv: string;
  public lecture: Vorlesung;
  public loading: boolean = true;
  public formMode: string = "none";
  private data$: Observable<any> = this.store
    .select(
      //holds cards data from store
      (state) => state.cardsData
    )
    .pipe(share());
  public cards$: Observable<Card[]> = this.data$.pipe(
    map((data) => data.cardsData.cards)
  );
  public lecture$: Observable<Vorlesung> = this.data$.pipe(
    map((data) => data.cardsData.lecture)
  );
  public uid$: Observable<string> = this.data$.pipe(
    map((data) => data.cardsData.uid)
  );

  private inTypingField: boolean;
  @ViewChild("alert", { static: false }) alert: ElementRef;

  @HostListener("click", ["$event.target"])
  onClick() {
    this.stateServie.setHideSuggestions(true);
  }
  constructor(
    private route: ActivatedRoute,
    private stateServie: StatesService,
    private store: Store<AppState>,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Cards");
    this.vlAbrv = this.route.snapshot.paramMap.get("abrv");

    this.store.dispatch(fetchCards());
    this.stateServie.getTyping().subscribe((val) => (this.inTypingField = val));

    this.stateServie.getFormMode().subscribe((mode) => (this.formMode = mode));
  }
}
