import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../../services/http.service";
import { StatesService } from "../../services/states.service";
import { Vorlesung } from "src/app/models/Vorlesung";
import { CardsService } from "src/app/services/cards.service";
import { Card } from "../../models/Card";
@Component({
  selector: "app-cards-page",
  templateUrl: "./cards-page.component.html",
  styleUrls: ["./cards-page.component.css"]
})
export class CardsPageComponent implements OnInit {
  public vlAbrv: string;
  public lecture: Vorlesung;
  public loading: boolean = true;
  public formMode: string = "none";
  public cards: Card[];
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private stateServie: StatesService,
    private cardsService: CardsService
  ) {}

  ngOnInit(): void {
    this.vlAbrv = this.route.snapshot.paramMap.get("abrv");
    this.httpService.getLectureByAbrv(this.vlAbrv).subscribe(resp => {
      if (resp.status == 504) {
        console.log("Server offline");
      } else {
        this.lecture = resp.body;
        this.httpService.getCardsFromLecture(this.lecture).subscribe(resp => {
          this.cardsService.initCards(resp.body);
          this.cards = resp.body;
        });
      }
    });
    this.stateServie
      .getLoadingState()
      .subscribe(value => (this.loading = value));
    this.stateServie.getFormMode().subscribe(mode => (this.formMode = mode));
  }

  setLoading(loading: boolean): void {
    this.loading = loading;
    this.stateServie.setLoadingState(loading);
  }
}
