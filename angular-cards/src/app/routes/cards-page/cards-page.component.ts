import { Component, OnInit, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../../services/http.service";
import { StatesService } from "../../services/states.service";
import { Vorlesung } from "src/app/models/Vorlesung";
import { CardsService } from "src/app/services/cards.service";
import { Card } from "../../models/Card";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-cards-page",
  templateUrl: "./cards-page.component.html",
  styleUrls: ["./cards-page.component.css"],
})
export class CardsPageComponent implements OnInit {
  public vlAbrv: string;
  public ativeCard: number;
  public lecture: Vorlesung;
  public loading: boolean = true;
  public formMode: string = "none";
  public cards: Card[];
  @HostListener("click", ["$event.target"])
  onClick() {
    this.stateServie.setHideSuggestions(true);
  }
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private stateServie: StatesService,
    private cardsService: CardsService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Cards");
    this.vlAbrv = this.route.snapshot.paramMap.get("abrv");
    this.httpService.getLectureByAbrv(this.vlAbrv).subscribe((resp) => {
      if (resp.status == 504) {
        console.log("Server offline");
      } else {
        this.lecture = resp.body;
        this.httpService.getCardsFromLecture(this.lecture).subscribe((resp) => {
          this.cardsService.initCards(resp.body);
          this.cards = resp.body;
        });
      }
    });
    this.cardsService.getNewCardIndex().subscribe((index) => {
      this.ativeCard = index;
    });
    this.stateServie
      .getLoadingState()
      .subscribe((value) => (this.loading = value));
    this.stateServie.getFormMode().subscribe((mode) => (this.formMode = mode));
  }

  setLoading(loading: boolean): void {
    this.loading = loading;
    this.stateServie.setLoadingState(loading);
  }
}
