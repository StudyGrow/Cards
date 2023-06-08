import { DomSanitizer } from '@angular/platform-browser';
import { distinctUntilChanged, map } from 'rxjs/operators';
import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  HostListener,
  SecurityContext,
  EventEmitter,
  Output,
} from '@angular/core';
import { Card } from '../../models/Card';
import { ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
// import { parse, HtmlGenerator } from 'latex.js';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/state';
import { AUTHORIZED, CURRENT_CARD, FORM_MODE, USER_ID } from 'src/app/store/selectors/selector';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  currentCard: Card;
  formMode: string;
  uid: string;
  constructor(private store: Store<AppState>, private sanitizer: DomSanitizer) {}
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onEditClicked = new EventEmitter();

  private mode$ = this.store.select('carouselState');
  inTypingField = false;
  activeIndex = 0;
  auth$: Observable<boolean> = this.store.select(AUTHORIZED);

  public isCollapsed = true;

  @Input() card: Card;
  @Input() index: number;

  @HostListener('window:keyup', ['$event']) handleKeyDown(event: KeyboardEvent): void {
    if (this.currentCard?._id !== this.card._id) {
      return;
    }
    if (!this.inTypingField) {
      if (event.key == 'ArrowDown') {
        event.preventDefault();
        this.content.toggle();
      } else if (event.key == 'ArrowUp') {
        event.preventDefault();
        this.content.toggle();
      }
    }
  }

  @ViewChild('answer', { static: true }) content;
  subscriptions$: Subscription[] = [];

  ngOnInit(): void {
    let sub = this.mode$.pipe(map((state) => state?.activeIndex)).subscribe((index) => {
      // hides the card content when carousel slides
      if (this.activeIndex != index) {
        this.content.close();
      }
      this.activeIndex = index;
    });
    this.subscriptions$.push(sub);

    sub = this.mode$.pipe(map((state) => state?.typingMode)).subscribe((val) => {
      this.inTypingField = val;
    });
    this.subscriptions$.push(sub);
    this.store.select(CURRENT_CARD).subscribe((card) => {
      this.currentCard = card;
    });

    sub = this.store.select(FORM_MODE).subscribe((mode) => {
      this.formMode = mode;
    });
    this.subscriptions$.push(sub);
    sub = this.store
      .select(USER_ID)
      .pipe(distinctUntilChanged())
      .subscribe((id) => {
        if (this.uid !== id) {
          this.uid = id;
        }
      });
    this.subscriptions$.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  parse(cardContent: string): string {
    if (this.card.latex == 0) return cardContent;
    // const generator = new HtmlGenerator({ hyphenate: false });
    // const doc = parse(cardContent, { generator: generator }).htmlDocument();
    // return doc.body.innerHTML;
  }

  enableEdit() {
    this.onEditClicked.emit();
  }

  isDisabled() {
    if (this.formMode == 'edit') return true;

    if (this.card?.authorId !== this.uid)
      // there is an author and it is not the current user
      return true;
    return false;
  }
}
