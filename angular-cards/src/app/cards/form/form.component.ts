import { COMMA, ENTER, BACKSLASH } from "@angular/cdk/keycodes";
import { Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { merge, Observable, of, Subscription } from "rxjs";
import { filter, map, startWith, tap, withLatestFrom } from "rxjs/operators";
import { DialogueComponent } from "src/app/components/dialogue/dialogue.component";
import { Card } from "src/app/models/Card";
import { User } from "src/app/models/User";
import { Vorlesung } from "src/app/models/Vorlesung";
import { setFormMode, setTypingMode } from "src/app/store/actions/actions";
import { addCard, updateCard } from "src/app/store/actions/cardActions";
import { addLercture } from "src/app/store/actions/LectureActions";
import { CardsEffects } from "src/app/store/effects/effects";
import {
  selectAllTags,
  selectFormMode,
  selectUser,
  selectCurrentLecture,
  selectCurrentCard,
  selectActiveIndex,
} from "src/app/store/selector";

class CardFormData {
  thema: string;
  content: string;
  tag: string;
}

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() neu: boolean = false;

  //Form
  form: FormGroup;
  formMode$: Observable<string>;
  formMode: string;

  //Card data
  lecture: Vorlesung;
  author: User;
  private activeCardIndex: number;
  cardCopy: Card = new Card("", "");
  //Tags that were selected
  selectedTags = [];

  //Autocomplete
  separatorKeysCodes: number[] = [ENTER];

  //List of available Tags displayed as suggestions with autocomplete
  tagsSuggestions$: Observable<string[]>;

  subscriptions$: Subscription[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private store: Store<any>,
    private actionState: CardsEffects
  ) {}

  createFormGroup(...args: string[]) {
    if (!args || args.length !== 3)
      return new FormGroup({
        thema: new FormControl(""),
        content: new FormControl(""),
        tag: new FormControl(""),
      });

    return new FormGroup({
      thema: new FormControl(args[0]),
      content: new FormControl(args[1]),
      tag: new FormControl(args[2]),
    });
  }

  ngOnInit(): void {
    let sub: Subscription;

    sub = this.store
      .select("cardsData")
      .pipe(map(selectUser)) //get user
      .subscribe((user) => {
        if (user && this.author !== user) {
          this.author = user;
        }
      });
    this.subscriptions$.push(sub);
    //FormMode
    this.formMode$ = this.store.select("cardsData").pipe(map(selectFormMode));

    this.form = this.createFormGroup();
    //input from tagfield
    let tagInput$ = this.form.valueChanges.pipe(
      map((val: CardFormData) => val.tag)
    );

    let allTags$ = this.store.select("cardsData").pipe(map(selectAllTags)); //get all tags
    this.tagsSuggestions$ = tagInput$.pipe(
      withLatestFrom(allTags$),
      map(([input, tags]) => this._filter([...tags], input))
    );

    sub = this.formMode$.subscribe((mode) => {
      this.formMode = mode;
      if (mode === "add") {
        if (this.neu) {
          this.lecture = JSON.parse(localStorage.getItem("vl"));
          sub = this.actionState.addLecture$.subscribe((res) =>
            this.router.navigateByUrl(`vorlesung/${this.lecture.abrv}`)
          );
          this.subscriptions$.push(sub);
        } else {
          sub = this.store
            .select("cardsData")
            .pipe(map(selectCurrentLecture))
            .subscribe((lect) => {
              if (lect) this.lecture = lect;
            });
          this.subscriptions$.push(sub);
        }
      } else if (mode === "edit") {
        sub = this.store
          .select("cardsData")
          .pipe(map(selectActiveIndex))
          .subscribe((index) => {
            this.activeCardIndex = index;
          });
        this.subscriptions$.push(sub);
        sub = this.store
          .select("cardsData")
          .pipe(map(selectCurrentCard))
          .subscribe((card) => {
            if (card._id != this.cardCopy._id) {
              //got new card
              this.cardCopy = { ...this.cardCopy, ...card }; //overwrite cardCopy
              this.form.reset({ ...this.cardCopy });
              this.selectedTags = [...this.cardCopy.tags];
            }
          });
        this.subscriptions$.push(sub);
      }
    });
    this.subscriptions$.push(sub);
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  submitForm() {
    let uinput = this.form.value.tag?.trim();
    if (uinput && !this.selectedTags.includes(uinput)) {
      this.selectedTags.push(uinput); //add last user input in case user forgot to add chip
    }

    if (this.formMode === "add") {
      //Create Card from form
      let card = new Card(
        this.form.value.thema,
        this.form.value.content,
        this.selectedTags,
        this.lecture.abrv
      );
      this.addCard(card);
      let sub = this.actionState.addCard$.subscribe((res) => {
        this.form.reset();
        this.selectedTags = [];
        sub.unsubscribe();
      });
    } else if (this.formMode === "edit") {
      this.updateCard(
        this.form.value.thema,
        this.form.value.content,
        this.selectedTags
      );
      let sub = this.actionState.updateCard$.subscribe(() => {
        this.store.dispatch(setFormMode({ mode: "reset" }));
        this.form.reset();
        sub.unsubscribe();
      });
    }
  }

  addCard(card: Card) {
    if (this.author) {
      card.authorId = this.author._id;
      card.authorName = this.author.name;
    }
    if (this.neu) {
      this.store.dispatch(addLercture({ lecture: this.lecture }));
    }

    this.store.dispatch(addCard({ card: card }));
  }

  updateCard(thema: string, content: string, tags: string[]) {
    //dispatch update by overwriting the fields of cardCopy
    this.store.dispatch(
      updateCard({
        card: { ...this.cardCopy, thema: thema, content: content, tags: tags },
      })
    );
  }

  inField() {
    this.store.dispatch(setTypingMode({ typing: true }));
  }
  resetNav() {
    this.store.dispatch(setTypingMode({ typing: false }));
  }

  isDisabled(content, thema) {
    if (!content.value || !thema.value) {
      return true;
    }

    return (
      thema.value.trim().length < 3 ||
      thema.value.trim().length > 500 ||
      content.value.trim().length > 1000
    );
  }
  removeChip(tag: string): void {
    const index = this.selectedTags.indexOf(tag);

    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    }
  }

  addChip(event: MatChipInputEvent): void {
    let newTag = event.value;
    if (!this.selectedTags.includes(newTag)) {
      this.selectedTags.push(newTag);
    }
    event.input.value = ""; //reset field
  }
  onSelectOption(event: MatAutocompleteSelectedEvent) {
    let newTag = event.option.viewValue;
    if (!this.selectedTags.includes(newTag)) {
      this.selectedTags.push(newTag);
    }
  }
  private _filter(tags: string[], value: string): string[] {
    if (!value || value.trim().length == 0) return tags;
    const filterValue = value.toLowerCase();

    return tags.filter((item) => item.toLowerCase().indexOf(filterValue) === 0);
  }
  cancelEdit() {
    this.dialog.open(DialogueComponent, {
      width: "400px",
      data: {
        title: "Abbruch",
        content:
          "Bist du sicher, dass du das Bearbeiten dieser Karte abbrechen möchtest?",
        abortText: "Nein, zurück",
        proceedText: "Ja",
      },
    });
  }
}
