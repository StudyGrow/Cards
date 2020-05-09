import { Component, OnInit, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CardsService } from "../../services/cards.service";
import { StatesService } from "../../services/states.service";
import { HttpService } from "../../services/http.service";
import { Card } from "../../models/Card";
import { SearchSuggestion } from "../../models/SearchSuggestion";
import { Vorlesung } from "src/app/models/Vorlesung";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  constructor(
    private cardsService: CardsService,
    private stateService: StatesService,
    private http: HttpService
  ) {}
  cards: Card[];
  suggestions: SearchSuggestion[];
  uInput: string;
  clearSuggestions: boolean;

  ngOnInit(): void {
    this.stateService.getHideSuggestions().subscribe((value) => {
      this.clearSuggestions = value;
      if (value) {
        this.suggestions = [];
      }
    });
    this.cardsService.getCards().subscribe((cards) => {
      this.cards = cards;
      cards.forEach((card) => {
        if (card.thema == null) {
          card.thema = "";
        }
        if (card.content == null) {
          card.content = "";
        }
      });
    });
  }

  findMatches(e: Event) {
    this.stateService.setHideSuggestions(false); //show suggestions
    if (this.uInput && this.uInput.length > 2) {
      this.suggestions = [];
      const regex = new RegExp(`${this.uInput}`, "gi");

      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].thema.match(regex)) {
          this.suggestions.push({ title: this.cards[i].thema, index: i });
        }
      }
    }
  }
  navigateTo(e: Event, index: number) {
    e.preventDefault();

    this.cardsService.setNewCardIndex(index);
  }
}
