import { Component, OnInit, OnDestroy } from "@angular/core";
import { StatesService } from "../../services/states.service";
import { CardsService } from "../../services/cards.service";
import { LecturesService } from "../../services/lectures.service";
import { Card } from "../../models/Card";
import { Vorlesung } from "src/app/models/Vorlesung";
import { Subscription } from "rxjs";

@Component({
  selector: "app-add-card-form",
  templateUrl: "./add-card-form.component.html",
  styleUrls: ["./add-card-form.component.css"],
})
export class AddCardFormComponent implements OnInit, OnDestroy {
  lecture: Vorlesung;
  newCard: Card;
  hidden: boolean;
  Contentlength: number;
  themaLength: number;
  subscriptions$: Subscription[] = [];
  constructor(
    private cardsService: CardsService,
    private stateService: StatesService,
    private lectureService: LecturesService
  ) {}

  ngOnInit(): void {
    let sub = this.lectureService
      .getCurrentLecture()
      .subscribe((lecture) => (this.lecture = lecture));
    this.subscriptions$.push(sub);
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  setStyle() {}
  onSubmit(f) {
    this.newCard = new Card(
      f.value.thema,
      f.value.content,
      this.lecture.abrv,
      0,
      f.value.tags
    );
    let sub = this.cardsService.addCard(this.newCard).subscribe((res) => {
      f.reset();
      sub.unsubscribe();
    });
  }
  inField() {
    this.stateService.setTyping(true);
  }
  resetNav() {
    this.stateService.setTyping(false);
  }
  //Function to set style of small character indicator
  setThemaCharIndicatorStyle(thema) {
    if (thema.value) {
      return {
        color:
          (thema.value && thema.value.length > 0 && thema.value.length < 3) ||
          thema.value.length > 200
            ? "#ff0000"
            : "#000000",
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
          content.value && content.value.length > 1000 ? "#ff0000" : "#000000",
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
      content.value.length > 1000 ||
      (thema.value.length > 0 && thema.value.length < 3) ||
      thema.value.length > 200
    );
  }
}
