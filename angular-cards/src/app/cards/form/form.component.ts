import { COMMA, ENTER, BACKSLASH } from "@angular/cdk/keycodes";
import { Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Card } from "src/app/models/Card";
import { User } from "src/app/models/User";
import { Vorlesung } from "src/app/models/Vorlesung";
import { setTypingMode } from "src/app/store/actions/actions";
import { addCard } from "src/app/store/actions/cardActions";
import { addLercture } from "src/app/store/actions/LectureActions";
import { CardsEffects } from "src/app/store/effects/effects";
import {
  selectAllTags,
  selectFormMode,
  selectFormTitle,
  selectUser,
} from "src/app/store/selector";

class CardForm {
  thema: string;
  content: string;
  tags: string[];
}

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() neu: boolean = false;
  form: FormGroup;
  formTitle$: Observable<string> = of("Karteikarte hinzufügen");

  lecture: Vorlesung;
  newCard: Card;
  hidden: boolean;
  Contentlength: number;
  themaLength: number;
  author: User;
  TagsLists = new FormControl("");
  separatorKeysCodes: number[] = [ENTER];

  selectedTags = [];
  tagsSuggestions$: Observable<string[]>;

  subscriptions$: Subscription[] = [];

  constructor(
    private router: Router,

    private store: Store<any>,
    private actionState: CardsEffects
  ) {
    this.form = this.createFormGroup();
  }
  createFormGroup() {
    return new FormGroup({
      thema: new FormControl(""),
      content: new FormControl(""),
      tagList: new FormControl([]),
    });
  }

  ngOnInit(): void {
    let sub: Subscription;

    sub = this.store
      .select("cardsData")
      .pipe(map(selectUser))
      .subscribe((user) => {
        if (user && this.author !== user) {
          this.author = user;
        }
      });
    this.subscriptions$.push(sub);

    this.formTitle$ = this.store.select("cardsData").pipe(map(selectFormTitle));

    if (this.neu) {
      this.lecture = JSON.parse(localStorage.getItem("vl"));
      sub = this.actionState.addLecture$.subscribe((res) =>
        this.router.navigateByUrl(`vorlesung/${this.lecture.abrv}`)
      );
      this.subscriptions$.push(sub);
    }

    this.tagsSuggestions$ = this.store
      .select("cardsData")
      .pipe(map(selectAllTags));
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  submitForm() {
    let sub = this.actionState.addCard$.subscribe((res) => {
      this.form.reset();
      sub.unsubscribe();
    });
    let abrv: string;
    if (this.neu) {
      abrv = this.lecture.abrv; //get the lecture abreviation stored lecture
    } else {
      abrv = this.router.url.split(/vorlesung\//)[1]; //get the lecture abreviation from the route
    }
    let tags: string[];
    // if (f.value.tags) {
    //   tags = f.value.tags.split("#");
    // } else {
    //   tags = [];
    // }

    // this.newCard = new Card(this.form.value., f.value.content, tags, abrv, 0);

    if (this.author) {
      this.newCard.authorId = this.author._id;
      this.newCard.authorName = this.author.name;
    }
    if (this.neu) {
      this.store.dispatch(addLercture({ lecture: this.lecture }));
    }
    this.store.dispatch(addCard({ card: this.newCard }));
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
  removeChip(tag: string): void {
    const index = this.selectedTags.indexOf(tag);

    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    }
  }

  addChip(event: MatChipInputEvent): void {
    //add tag to the filters
    console.log(event);
    let newTag = event.value;
    if (!this.selectedTags.includes(newTag)) {
      this.selectedTags.push(newTag);
    }
    this.TagsLists.setValue(null);
  }
  onSelectOption(event: MatAutocompleteSelectedEvent) {
    let newTag = event.option.viewValue;
    if (!this.selectedTags.includes(newTag)) {
      this.selectedTags.push(newTag);
    }
    this.form.value;
  }
}
