import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Vorlesung } from "src/app/models/Vorlesung";
import { CardsService } from "src/app/services/cards.service";

import { Title } from "@angular/platform-browser";
import { Card } from "../models/Card";
import { StatesService } from "../services/states.service";
import { Observable } from "rxjs";

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

  private inTypingField: boolean;
  @ViewChild("alert", { static: false }) alert: ElementRef;

  @HostListener("click", ["$event.target"])
  onClick() {
    this.stateServie.setHideSuggestions(true);
  }
  cards$: Observable<Card[]>;
  formMode$: Observable<string>;
  constructor(
    private route: ActivatedRoute,
    private stateServie: StatesService,
    private cardsService: CardsService,

    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Cards");
    this.cards$ = this.cardsService.getCards();

    this.formMode$ = this.stateServie.getFormMode();
  }
}
