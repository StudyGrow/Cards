import { Component, OnInit, Input, OnDestroy, HostListener } from '@angular/core';
import { Card } from '../../models/Card';
import { ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { parse, HtmlGenerator } from 'latex.js/dist/latex.js';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/models/state';
import { authorized } from 'src/app/store/selector';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) {}

  private mode$ = this.store.select('mode');
  inTypingField: boolean = false;
  activeIndex: number;
  auth$: Observable<boolean> = this.store.select(authorized);

  parsed: any = [];

  public isCollapsed = true;

  @Input() card: Card;
  @Input() index: number;

  @HostListener('window:keyup', ['$event']) handleKeyDown(event: KeyboardEvent) {
    if (!this.inTypingField && this.activeIndex == this.index) {
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
    let sub = this.mode$.pipe(map((state) => state.activeIndex)).subscribe((index) => {
      //hides the card content when carousel slides
      if (this.activeIndex != index) {
        this.content.close();
      }
      this.activeIndex = index;
    });
    this.subscriptions$.push(sub);

    sub = this.mode$.pipe(map((state) => state.typingMode)).subscribe((val) => {
      this.inTypingField = val;
    });
    this.subscriptions$.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  parse(cardContent: string) {
    if (this.card.latex == 0) return cardContent;
    let generator = new HtmlGenerator({ hyphenate: false });
    let doc = parse(cardContent, { generator: generator }).htmlDocument();
    return doc.body.innerHTML;
  }
}
