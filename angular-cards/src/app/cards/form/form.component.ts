import { ENTER } from '@angular/cdk/keycodes';
import { Component, Input, OnDestroy, OnInit, SecurityContext, ViewChild } from '@angular/core';
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
import { SuccessMessage, WarnMessage } from 'src/app/models/Notification';
import { Data, Mode } from 'src/app/models/state';
import { User } from 'src/app/models/User';
import { Vorlesung } from 'src/app/models/Vorlesung';
import { NotificationsService } from 'src/app/services/notifications.service';
import { changeTab, setFormMode, setTypingMode, showNewCard } from 'src/app/store/actions/StateActions';
import { addCard, updateCard } from 'src/app/store/actions/CardActions';
import { addLercture } from 'src/app/store/actions/LectureActions';
import { CardsEffects } from 'src/app/store/effects/effects';
import { AppState } from '../../models/state';
import { parse, HtmlGenerator } from 'latex.js';
import { ALL_TAGS, CURRENT_CARD, SELECTED_LECTURE, FORM_MODE, USER } from 'src/app/store/selector';
import { TranslateService } from '@ngx-translate/core';
import { QuillEditorComponent } from 'ngx-quill';
import { DomSanitizer } from '@angular/platform-browser';
class CardFormData {
  thema: string;
  content: string;
  tag: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  @ViewChild('latex') toggleRef: MatSlideToggle;
  @ViewChild('tagRef') tagRef;
  @ViewChild('editor') editor: QuillEditorComponent;
  @Input() neu = false; // true if we are adding a card for a new lecture

  // Form
  form: FormGroup;
  formMode$: Observable<string>;
  editorContent: string;
  editorHTML: string;

  // Card data
  private lecture: Vorlesung;
  private author: User;
  private cardCopy: Card = new Card('', ''); // Stores a copy of the current card. If we update the card, we use this copy and only overwrite some fields  (thema content tags latex)
  // Tags that were selected
  selectedTags = [];

  private generator: HtmlGenerator;

  // Autocomplete
  separatorKeysCodes: number[] = [ENTER];

  // List of available Tags displayed as suggestions with autocomplete
  tagsSuggestions$: Observable<string[]>;

  private subscriptions$: Subscription[] = [];

  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>,
    private actionState: CardsEffects,
    private router: Router,
    private notifs: NotificationsService,
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  ngOnInit(): void {
    this.form = this.createFormGroup();
    const currentCard$ = this.store.select(CURRENT_CARD);
    // input from tagfield
    const tagInput$ = this.form.valueChanges.pipe(map((val: CardFormData) => val.tag));
    const allTags$ = this.store.select(ALL_TAGS); // get all tags for the lecture

    let sub: Subscription;

    sub = this.store
      .select(USER) // get user
      .pipe(distinctUntilChanged((old, current) => old._id === current._id))
      .subscribe((user) => {
        if (user && this.author !== user) {
          this.author = user;
        }
      });
    this.subscriptions$.push(sub);

    // FormMode
    this.formMode$ = this.store.select(FORM_MODE);

    // suggestions for autocomplete
    this.tagsSuggestions$ = tagInput$.pipe(
      startWith(''), // show all suggestions if input is null
      withLatestFrom(allTags$), // holds all available tags
      map(([input, tags]) => this._filter(tags, input)), // filter tags with input
      map((list) => (list ? [...list].sort() : list)) // sort tags
    );

    sub = this.store.select(SELECTED_LECTURE).subscribe((lect) => {
      this.lecture = lect;
    });
    this.subscriptions$.push(sub);

    sub = this.formMode$.pipe(distinctUntilChanged(), withLatestFrom(currentCard$)).subscribe(([mode, card]) => {
      if (card) {
        this.cardCopy = { ...card };
        this.loadForm(mode, card);
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
    sub = this.actionState.addCard$.subscribe(() => {
      this.notifs.addNotification(new SuccessMessage('Deine Karte wurde erfolgreich hinzugefügt.'));
    });
    this.subscriptions$.push(sub);
  }
  /**
   * Initialiizes the form group
   */
  createFormGroup() {
    return new FormGroup({
      thema: new FormControl(''),
      content: new FormControl(''),
    });
  }

  /**
   * load the initial state of the form. If we are in add mode the form will be empty. If we are in edit mode it will be filled with the current card
   * @param mode mode of the form
   * @param card the current card
   */
  private loadForm(mode: string, card: Card) {
    if (!card) return;
    switch (mode) {
      case 'edit':
        if (card.latex === 1) {
          this.cardCopy.content = card.content.replace(/\\\\ /g, '\n');
          if (this.toggleRef?.checked === false) {
            this.toggleRef.toggle();
          }
        }
        this.form.reset({ ...this.cardCopy }); // overwrite form with content of the card

        setTimeout(() => {
          // the form reset is executed asynchronously. this timeout is needed to wait until the form is resetted
          // otherwise the editor is overwrite by the form which does apply the formattings

          const safeContent = this.sanitizer.sanitize(SecurityContext.HTML, this.cardCopy.content);
          // sanitizes the content to prevent XSS
          this.editor.quillEditor.clipboard.dangerouslyPasteHTML(safeContent);
        });

        this.selectedTags = this.cardCopy?.tags // load the selecteed tags for the current card
          ? [...this.cardCopy.tags]
          : [];
        break;

      case 'add':
        this.resetForm(); // clear data from form when mode is "add"
        if (this.toggleRef?.checked) {
          this.toggleRef.toggle();
        }
        break;
    }
  }

  submitForm(formMode: string) {
    const uinput = this.tagRef.nativeElement.value?.trim();
    if (uinput?.length > 0 && !this.selectedTags.includes(uinput)) {
      this.tagRef.nativeElement.value = '';
      this.selectedTags.push(uinput); // add last user input in case user forgot to add chip
    }
    let latexState: number;

    if (this.toggleRef.checked) {
      // check if the content can be parsed
      try {
        this.generator = new HtmlGenerator({ hyphenate: false });
        const doc = parse(this.form.value.content, {
          generator: this.generator,
        });
        doc.htmlDocument().body;
      } catch (e) {
        console.warn(e);
        this.notifs.addNotification(
          new WarnMessage(
            'Der Latex content ist nicht formattiert. Überprüfe ob der content korrekt von $ umhüllt ist '
          )
        );
        return;
      }
      latexState = 1;
    } else {
      latexState = 0;
    }

    // replaces the characters for newline for latex
    let content = this.editorHTML;
    content = latexState === 1 ? content.replace(/\n/g, '\\\\ ') : content;

    if (formMode === 'add') {
      // Create Card from form
      if (this.neu && !this.lecture) {
        this.lecture = JSON.parse(localStorage.getItem('vl')).abrv;
        if (!this.lecture) {
          console.error('Vorlesung nicht definiert');
          this.notifs.addNotification(new WarnMessage('Ein Fehler ist aufgetreten. Versuche es später erneut'));
          return;
        }
      }

      const card = new Card(this.form.value.thema, content, this.selectedTags, this.lecture.abrv);
      card.latex = latexState;
      this.addCard(card);
    } else if (formMode === 'edit') {
      this.updateCard(this.form.value.thema, content, this.selectedTags, latexState);
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
    const sub = this.actionState.addCard$.subscribe((result) => {
      if (result) {
        this.resetForm();
      }
      sub.unsubscribe();
    });
  }

  private updateCard(thema: string, content: string, tags: string[], latex: number) {
    // dispatch update by overwriting the fields of cardCopy
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
    const sub = this.actionState.updateCard$.subscribe((card) => {
      if (card) {
        this.store.dispatch(setFormMode({ mode: 'add' }));
        this.store.dispatch(changeTab({ tab: 0 }));
        this.resetForm();
      }

      sub.unsubscribe();
    });
  }

  // disables the casousel navigation by arrow
  inField() {
    this.store.dispatch(setTypingMode({ typing: true }));
  }
  // enables the casousel navigation by arrow
  resetNav() {
    this.store.dispatch(setTypingMode({ typing: false }));
  }
  private resetForm() {
    this.selectedTags = [...this.selectedTags];
    this.form.reset();
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    });
  }

  /**
   * Checks wether the submit button should be disabled
   * @param content
   * @param thema
   */
  isDisabled(thema: FormControl) {
    if (!this.editorHTML || !thema.value) {
      return true;
    }

    return thema.value.trim().length < 3 || thema.value.trim().length > 500 || this.editorHTML.trim().length > 1000;
  }

  removeChip(tag: string): void {
    const index = this.selectedTags.indexOf(tag);

    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    }
  }

  changedEditor(e) {
    if (e.event === 'text-change') {
      this.editorHTML = e.html;
      this.editorContent = e.text;
    }
  }

  addChip(event: MatChipInputEvent): void {
    const newTag = event.value.trim();
    if (!newTag || newTag.length == 0) {
      return;
    }
    if (!this.selectedTags.includes(newTag)) this.selectedTags.push(newTag);
    event.chipInput.clear(); // clear the chipinput
  }
  onSelectOption(event: MatAutocompleteSelectedEvent) {
    const newTag = event.option.viewValue;
    if (!this.selectedTags.includes(newTag)) this.selectedTags.push(newTag);
    // this.form.reset({ ...this.form.value, tag: '' });
  }
  private _filter(tags: string[], value: string): string[] {
    if (!value || value.trim().length == 0) return tags;
    const filterValue = value.toLowerCase();

    return [...tags].filter((item) => item.toLowerCase().indexOf(filterValue) === 0);
  }
  cancelEdit(): void {
    this.dialog.open(DialogueComponent, {
      width: '400px',
      data: {
        title: this.translate.instant('card-form.cancel.dialog.title'),
        content: this.translate.instant('card-form.cancel.dialog.content'),
        abortText: this.translate.instant('card-form.cancel.dialog.abort'),
        proceedText: this.translate.instant('card-form.cancel.dialog.confirm'),
        type: 'card-form.cancel',
      },
    });
  }
}
