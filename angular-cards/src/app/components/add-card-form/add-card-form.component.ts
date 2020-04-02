import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { StatesService } from "../../services/states.service";
import { CardsService } from "../../services/cards.service";
import { Card } from "../../models/Card";
import { Vorlesung } from "src/app/models/Vorlesung";

@Component({
  selector: "app-add-card-form",
  templateUrl: "./add-card-form.component.html",
  styleUrls: ["./add-card-form.component.css"]
})
export class AddCardFormComponent implements OnInit {
  @Input() lecture: Vorlesung;
  @Output() returnCard: EventEmitter<Card> = new EventEmitter();
  newCard: Card;
  hidden: boolean;
  Contentlength: number;
  themaLength: number;
  constructor(
    private cardsService: CardsService,
    private stateService: StatesService
  ) {}

  ngOnInit(): void {}
  setStyle() {}
  onSubmit(f: NgForm) {
    this.newCard = new Card(f.value.thema, f.value.content);
    this.cardsService.addCard(this.newCard, this.lecture.abrv);
    this.stateService.setLoadingState(true);
    f.reset();
  }
  //Function to set style of small character indicator
  setThemaCharIndicatorStyle(thema) {
    if (thema.value) {
      return {
        color:
          (thema.value && thema.value.length > 0 && thema.value.length < 3) ||
          thema.value.length > 60
            ? "#ff0000"
            : "#000000"
      };
    } else {
      return { color: "#000000" };
    }
  }
  //Function to set style of small character indicator
  setContentCharIndicatorStyle(content) {
    if (content.value) {
      return {
        color:
          content.value && content.value.length > 400 ? "#ff0000" : "#000000"
      };
    } else {
      return { color: "#000000" };
    }
  }

  getLength(elem) {
    if (elem.value) {
      return elem.value.length;
    } else {
      return 0;
    }
  }

  isDisabled(content, thema) {
    if (!content.value || !thema.value) {
      return true;
    }
    return (
      content.value.length > 400 ||
      (thema.value.length > 0 && thema.value.length < 3) ||
      thema.value.length > 60
    );
  }
}
