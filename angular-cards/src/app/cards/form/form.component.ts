import { COMMA, ENTER, BACKSLASH } from "@angular/cdk/keycodes";
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
} from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatDialog } from "@angular/material/dialog";
import { MatInput } from "@angular/material/input";
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { merge, Observable, of, Subscription } from "rxjs";
import { filter, map, startWith, tap, withLatestFrom } from "rxjs/operators";
import { DialogueComponent } from "src/app/components/dialogue/dialogue.component";
import { Card } from "src/app/models/Card";
import { WarnMessage } from "src/app/models/Notification";
import { User } from "src/app/models/User";
import { Vorlesung } from "src/app/models/Vorlesung";
import { NotificationsService } from "src/app/services/notifications.service";
import {
  changeTab,
  setFormMode,
  setTypingMode,
} from "src/app/store/actions/actions";
import { addCard, updateCard } from "src/app/store/actions/cardActions";
import { addLercture } from "src/app/store/actions/LectureActions";
import { CardsEffects } from "src/app/store/effects/effects";
import { AppState } from "src/app/store/reducer";
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
  @ViewChild("latex") toggle: MatSlideToggle;

  @Input() neu: boolean = false; //true if we are adding a card for a new lecture

  //Form
  form: FormGroup;
  formMode$: Observable<string>;
  formMode: string; //variable which holds the old formode

  //Card data
  lecture: Vorlesung;
  author: User;
  cardCopy: Card = new Card("", "");
  //Tags that were selected
  selectedTags = [];

  //Autocomplete
  separatorKeysCodes: number[] = [ENTER];

  //List of available Tags displayed as suggestions with autocomplete
  tagsSuggestions$: Observable<string[]>;

  tagRef: FormControl;
  subscriptions$: Subscription[] = [];

  constructor(
    public dialog: MatDialog,
    private store: Store<any>,
    private actionState: CardsEffects,
    private router: Router,
    private notifs: NotificationsService
  ) {}

  createFormGroup(...args: string[]) {
    this.tagRef = new FormControl("");
    if (!args || args.length !== 3)
      return new FormGroup({
        thema: new FormControl(""),
        content: new FormControl(""),
        tag: this.tagRef,
      });

    return new FormGroup({
      thema: new FormControl(args[0]),
      content: new FormControl(args[1]),
      tag: new FormControl(args[2]),
    });
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  ngOnInit(): void {
    this.form = this.createFormGroup();

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

    //input from tagfield
    let tagInput$ = this.form.valueChanges.pipe(
      map((val: CardFormData) => val.tag)
    );

    let allTags$ = this.store.select("cardsData").pipe(map(selectAllTags)); //get all tags

    //suggestions for autocomplete
    this.tagsSuggestions$ = tagInput$.pipe(
      startWith(""), //show all suggestions if input is null
      withLatestFrom(allTags$),
      map(([input, tags]) => this._filter([...tags], input)), //filter tags with input
      map((list) => list.sort())
    );
    //current Tab
    let tab$ = this.store
      .select("cardsData")
      .pipe(map((state: AppState) => state.currTab));

    sub = this.store
      .select("cardsData")
      .pipe(
        map(selectCurrentCard),
        withLatestFrom(this.formMode$),
        withLatestFrom(tab$)
      )
      .subscribe(([[card, mode], tab]) => {
        if (card) {
          this.cardCopy = { ...this.cardCopy, ...card }; //overwrite cardCopy
        }
        if (tab === 0 && this.toggle) {
          //set the toggle to the right state
          if (!this.toggle.checked && mode === "edit" && card?.latex === 1) {
            this.toggle.toggle();
          } else if (this.toggle.checked && mode === "add") {
            this.toggle.toggle();
          }
        }
      });
    this.subscriptions$.push(sub);

    sub = this.store
      .select("cardsData")
      .pipe(map(selectCurrentLecture))
      .subscribe((lect) => {
        if (lect) {
          this.lecture = lect;
        }
      });
    this.subscriptions$.push(sub);

    sub = this.formMode$.subscribe((mode) => {
      if (this.formMode !== mode) {
        //formmode has changed
        this.formMode = mode;
        if (mode == "edit") {
          this.form.reset({ ...this.cardCopy }); //overwrite form with content of the card

          this.selectedTags = this.cardCopy?.tags //load the selecteed tags for the current card
            ? [...this.cardCopy.tags]
            : [];
        } else this.resetForm(); //clear data from form when mode is "add"
      }
    });
    this.subscriptions$.push(sub);

    if (this.neu) {
      this.lecture = JSON.parse(localStorage.getItem("vl"));
      sub = this.actionState.addLecture$.subscribe(() =>
        this.router.navigateByUrl(
          `vorlesung/${JSON.parse(localStorage.getItem("vl")).abrv}`
        )
      );
      this.subscriptions$.push(sub);
    }
  }

  submitForm() {
    let uinput = this.form.value.tag?.trim();
    if (uinput && !this.selectedTags.includes(uinput)) {
      this.selectedTags.push(uinput); //add last user input in case user forgot to add chip
    }
    let latexState: number;

    if (this.toggle.checked) {
      let dollarcount = this.form.value.content.split("$").length - 1; //count occurences of $ in content
      if (this.form.value.content.includes("$$") || dollarcount % 2 !== 0) {
        this.notifs.addNotification(
          new WarnMessage("Der Latex content ist nicht korrekt mit $ umhüllt")
        );
        return;
      }
      latexState = 1;
    } else {
      latexState = 0;
    }

    if (this.formMode === "add") {
      //Create Card from form
      let card = new Card(
        this.form.value.thema,
        this.form.value.content,
        this.selectedTags,
        this.neu
          ? JSON.parse(localStorage.getItem("vl")).abrv
          : this.lecture.abrv
      );
      card.latex = latexState;

      this.addCard(card);
    } else if (this.formMode === "edit") {
      this.updateCard(
        this.form.value.thema,
        this.form.value.content,
        this.selectedTags,
        latexState
      );
    }
  }

  private addCard(card: Card) {
    if (this.author) {
      card.authorId = this.author._id;
      card.authorName = this.author.name;
    }
    if (this.neu) {
      this.store.dispatch(
        addLercture({ lecture: JSON.parse(localStorage.getItem("vl")) })
      );
    }
    this.store.dispatch(addCard({ card: card }));
    let sub = this.actionState.addCard$.subscribe((card) => {
      if (card) {
        this.resetForm();
      }
      sub.unsubscribe();
    });
  }

  private updateCard(
    thema: string,
    content: string,
    tags: string[],
    latex: number
  ) {
    //dispatch update by overwriting the fields of cardCopy
    this.store.dispatch(
      updateCard({
        card: {
          ...this.cardCopy,
          thema: thema,
          content: content,
          tags: tags,
          latex: latex,
        },
      })
    );
    let sub = this.actionState.updateCard$.subscribe((card) => {
      if (card) {
        this.store.dispatch(setFormMode({ mode: "add" }));
        this.store.dispatch(changeTab({ tab: 0 }));
        this.resetForm();
      }

      sub.unsubscribe();
    });
  }

  //disables the casousel navigation by arrow
  inField() {
    this.store.dispatch(setTypingMode({ typing: true }));
  }
  //enables the casousel navigation by arrow
  resetNav() {
    this.store.dispatch(setTypingMode({ typing: false }));
  }
  resetForm() {
    this.selectedTags = [];
    this.form.reset();
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    });
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
    if (!this.selectedTags.includes(newTag)) this.selectedTags.push(newTag);
    event.input.value = ""; //reset field
  }
  onSelectOption(event: MatAutocompleteSelectedEvent) {
    let newTag = event.option.viewValue;
    if (!this.selectedTags.includes(newTag)) this.selectedTags.push(newTag);
    this.form.reset({ ...this.form.value, tag: "" });
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
