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
  public cards: Card[];

  private inTypingField: boolean;
  @ViewChild("alert", { static: false }) alert: ElementRef;

  @HostListener("click", ["$event.target"])
  onClick() {
    this.stateServie.setHideSuggestions(true);
  }
  constructor(
    private route: ActivatedRoute,
    private stateServie: StatesService,
    private cardsService: CardsService,

    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Cards");
    this.vlAbrv = this.route.snapshot.paramMap.get("abrv");
    this.stateServie.getTyping().subscribe((val) => (this.inTypingField = val));

    this.stateServie.getFormMode().subscribe((mode) => (this.formMode = mode));
  }
}
