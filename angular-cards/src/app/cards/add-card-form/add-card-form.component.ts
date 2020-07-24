import { Component, OnInit, OnDestroy, Input, ViewChild } from "@angular/core";
import { StatesService } from "../../services/states.service";

import { Card } from "../../models/Card";
import { Vorlesung } from "src/app/models/Vorlesung";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/reducer";
import { addCard } from "src/app/store/actions/cardActions";
import { addLercture } from "src/app/store/actions/LectureActions";
import { CardsEffects } from "src/app/store/effects/effects";
import { NgForm } from "@angular/forms";
import { setTypingMode } from "src/app/store/actions/actions";

@Component({
  selector: "app-add-card-form",
  templateUrl: "./add-card-form.component.html",
  styleUrls: ["./add-card-form.component.css"],
})
export class AddCardFormComponent implements OnInit, OnDestroy {
  @Input() neu: boolean = false;
  @ViewChild("f") form: NgForm;
  lecture: Vorlesung;
  newCard: Card;
  hidden: boolean;
  Contentlength: number;
  themaLength: number;
  subscriptions$: Subscription[] = [];
  constructor(
    private stateService: StatesService,
    private router: Router,

    private store: Store<AppState>,
    private actionState: CardsEffects
  ) {}

  ngOnInit(): void {
    let sub = this.actionState.addCard$.subscribe((res) => this.form.reset());
    this.subscriptions$.push(sub);
    if (this.neu) {
      this.lecture = JSON.parse(localStorage.getItem("vl"));
      sub = this.actionState.addLecture$.subscribe((res) =>
        this.router.navigateByUrl(`vorlesung/${this.lecture.abrv}`)
      );
      this.subscriptions$.push(sub);
    }
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
    if (this.neu) {
      this.store.dispatch(addLercture({ lecture: this.lecture }));
      this.store.dispatch(addCard({ card: this.newCard }));
    } else {
      this.store.dispatch(addCard({ card: this.newCard }));
    }
  }
  inField() {
    this.store.dispatch(setTypingMode({ typing: true }));
  }
  resetNav() {
    this.store.dispatch(setTypingMode({ typing: false }));
  }
  //Function to set style of small character indicator
  setThemaCharIndicatorStyle(thema) {
    if (thema.value) {
      return {
        color:
          (thema.value && thema.value.length > 0 && thema.value.length < 3) ||
          thema.value.length > 500
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
      thema.value.length > 500
    );
  }
}
