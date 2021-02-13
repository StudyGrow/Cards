import { ENTER } from '@angular/cdk/keycodes';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';

import { MatSlideToggle } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, map, startWith, withLatestFrom } from 'rxjs/operators';
import { DialogueComponent } from 'src/app/components/dialogue/dialogue.component';
import { Card } from 'src/app/models/Card';
import { WarnMessage } from 'src/app/models/Notification';
import { Data, Mode } from 'src/app/models/state';
import { User } from 'src/app/models/User';
import { Vorlesung } from 'src/app/models/Vorlesung';
import { NotificationsService } from 'src/app/services/notifications.service';
import { changeTab, setFormMode, setTypingMode } from 'src/app/store/actions/StateActions';
import { addCard, updateCard } from 'src/app/store/actions/CardActions';
import { addLercture } from 'src/app/store/actions/LectureActions';
import { CardsEffects } from 'src/app/store/effects/effects';
import { AppState } from '../../models/state';
import { parse, HtmlGenerator } from 'latex.js/dist/latex.js';
import { AllTags, CurrentCard, CurrentLecture, FormMode, user } from 'src/app/store/selector';

class CardFormData {
  thema: string;
  content: string;
  tag: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  private mode$: Observable<Mode> = this.store.select('mode');

  @ViewChild('latex') toggleRef: MatSlideToggle;

  @Input() neu: boolean = false; //true if we are adding a card for a new lecture

  //Form
  form: FormGroup;
  formMode$: Observable<string>;

  //Card data
  lecture: Vorlesung;
  author: User;
  cardCopy: Card = new Card('', '');
  //Tags that were selected
  selectedTags = [];

  generator: HtmlGenerator;

  //Autocomplete
  separatorKeysCodes: number[] = [ENTER];

  //List of available Tags displayed as suggestions with autocomplete
  tagsSuggestions$: Observable<string[]>;

  tagRef: FormControl;
  subscriptions$: Subscription[] = [];

  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>,
    private actionState: CardsEffects,
    private router: Router,
    private notifs: NotificationsService
  ) {}

  createFormGroup(...args: string[]) {
    this.tagRef = new FormControl('');
    if (!args || args.length !== 3)
      return new FormGroup({
        thema: new FormControl(''),
        content: new FormControl(''),
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
      .select(user) //get user
      .subscribe((user) => {
        if (user && this.author !== user) {
          this.author = user;
        }
      });
    this.subscriptions$.push(sub);

    //FormMode
    this.formMode$ = this.store.select(FormMode);

    //input from tagfield
    let tagInput$ = this.form.valueChanges.pipe(map((val: CardFormData) => val.tag));

    let allTags$ = this.store.select(AllTags); //get all tags

    //suggestions for autocomplete
    this.tagsSuggestions$ = tagInput$.pipe(
      startWith(''), //show all suggestions if input is null
      withLatestFrom(allTags$),
      map(([input, tags]) => this._filter(tags, input)), //filter tags with input
      map((list) => (list ? [...list].sort() : list))
    );

    let currentCard$ = this.store.select(CurrentCard);
    sub = currentCard$.subscribe((card) => {
      if (card) {
        this.cardCopy = { ...this.cardCopy, ...card }; //overwrite cardCopy
      }
    });
    this.subscriptions$.push(sub);

    sub = this.store.select(CurrentLecture).subscribe((lect) => {
      if (lect) {
        this.lecture = lect;
      }
    });
    this.subscriptions$.push(sub);

    sub = this.formMode$.pipe(distinctUntilChanged(), withLatestFrom(currentCard$)).subscribe(([mode, card]) => {
      if (mode == 'edit') {
        setTimeout(() => {
          this.form.reset({ ...this.cardCopy }); //overwrite form with content of the card

          this.selectedTags = this.cardCopy?.tags //load the selecteed tags for the current card
            ? [...this.cardCopy.tags]
            : [];
        }, 200);
        if (this.toggleRef?.checked === false && card?.latex === 1) {
          this.toggleRef.toggle();
        }
      } else {
        this.resetForm(); //clear data from form when mode is "add"
        if (this.toggleRef?.checked) {
          this.toggleRef.toggle();
        }
      }
    });
    this.subscriptions$.push(sub);

    if (this.neu) {
      this.lecture = JSON.parse(localStorage.getItem('vl'));
      sub = this.actionState.addLecture$.subscribe(() =>
        this.router.navigateByUrl(`vorlesung/${JSON.parse(localStorage.getItem('vl')).abrv}`)
      );
      this.subscriptions$.push(sub);
    }
  }

  submitForm(formMode: string) {
    let uinput = this.form.value.tag?.trim();
    if (uinput && !this.selectedTags.includes(uinput)) {
      this.selectedTags.push(uinput); //add last user input in case user forgot to add chip
    }
    let latexState: number;

    if (this.toggleRef.checked) {
      try {
        this.generator = new HtmlGenerator({ hyphenate: false });
        let doc = parse(this.form.value.content, {
          generator: this.generator,
        });
        doc.htmlDocument().body;
      } catch (e) {
        console.log(e);
        this.notifs.addNotification(new WarnMessage('Der Latex content ist nicht korrekt mit $ umhüllt'));
        return;
      }

      latexState = 1;
    } else {
      latexState = 0;
    }

    if (formMode === 'add') {
      //Create Card from form
      let card = new Card(
        this.form.value.thema,
        this.form.value.content,
        this.selectedTags,
        this.neu ? JSON.parse(localStorage.getItem('vl')).abrv : this.lecture.abrv
      );
      card.latex = latexState;

      this.addCard(card);
    } else if (formMode === 'edit') {
      this.updateCard(this.form.value.thema, this.form.value.content, this.selectedTags, latexState);
    }
  }

  private addCard(card: Card) {
    if (this.author) {
      card.authorId = this.author._id;
      card.authorName = this.author.name;
    }
    if (this.neu) {
      this.store.dispatch(addLercture({ lecture: JSON.parse(localStorage.getItem('vl')) }));
    }
    this.store.dispatch(addCard({ card: card }));
    let sub = this.actionState.addCard$.subscribe((card) => {
      if (card) {
        this.resetForm();
      }
      sub.unsubscribe();
    });
  }

  private updateCard(thema: string, content: string, tags: string[], latex: number) {
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
        this.store.dispatch(setFormMode({ mode: 'add' }));
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

    return thema.value.trim().length < 3 || thema.value.trim().length > 500 || content.value.trim().length > 1000;
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
    event.input.value = ''; //reset field
  }
  onSelectOption(event: MatAutocompleteSelectedEvent) {
    let newTag = event.option.viewValue;
    if (!this.selectedTags.includes(newTag)) this.selectedTags.push(newTag);
    this.form.reset({ ...this.form.value, tag: '' });
  }
  private _filter(tags: string[], value: string): string[] {
    if (!value || value.trim().length == 0) return tags;
    const filterValue = value.toLowerCase();

    return [...tags].filter((item) => item.toLowerCase().indexOf(filterValue) === 0);
  }
  cancelEdit() {
    this.dialog.open(DialogueComponent, {
      width: '400px',
      data: {
        title: 'Abbruch',
        content: 'Bist du sicher, dass du das Bearbeiten dieser Karte abbrechen möchtest?',
        abortText: 'Nein, zurück',
        proceedText: 'Ja',
      },
    });
  }
}
