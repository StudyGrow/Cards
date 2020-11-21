import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  HostListener,
} from "@angular/core";
import { Card } from "../../models/Card";
import { ViewChild } from "@angular/core";
import { CardsService } from "../../services/cards.service";
import { Observable, Subscription } from "rxjs";
import { parse, HtmlGenerator } from "latex.js/dist/latex.js";

import { SafeHtmlPipe } from "../../shared/safe-html.pipe";

import { Store } from "@ngrx/store";
import { map, share } from "rxjs/operators";
import {
  setActiveCardIndex,
  goNext,
  goPrev,
} from "src/app/store/actions/cardActions";
import { authenticated } from "../../store/selector";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit, OnDestroy {
  constructor(private store: Store<any>) {}

  inTypingField: boolean = false;
  activeIndex: number;
  auth$: Observable<boolean>;

  parsed: any = [];

  public isCollapsed = true;

  @Input() card: Card;
  @Input() index: number;

  @HostListener("window:keyup", ["$event"]) handleKeyDown(
    event: KeyboardEvent
  ) {
    if (!this.inTypingField && this.activeIndex == this.index) {
      if (event.key == "ArrowDown") {
        event.preventDefault();
        this.content.toggle();
      } else if (event.key == "ArrowUp") {
        event.preventDefault();
        this.content.toggle();
      }
    }
  }

  @ViewChild("answer", { static: true }) content;
  subscriptions$: Subscription[] = [];

  ngOnInit(): void {
    let data$ = this.store.select("cardsData");
    this.auth$ = data$.pipe(map(authenticated));

    let sub = data$
      .pipe(map((state) => state.activeIndex))
      .subscribe((index) => {
        //hides the card content when carousel slides
        if (this.activeIndex != index) {
          this.content.close();
        }
        this.activeIndex = index;
      });
    this.subscriptions$.push(sub);
    if (this.card.latex != 0) {
      this.parse(this.card.content);
    } else {
      this.parsed.push(this.card.content);
    }

    sub = data$.pipe(map((state) => state.typingMode)).subscribe((val) => {
      this.inTypingField = val;
    });
    this.subscriptions$.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  parse(cardContent: any) {
    var latex = cardContent;
    let generator = new HtmlGenerator({ hyphenate: false });
    let doc = parse(latex, { generator: generator }).htmlDocument();
    latex = doc.body.innerHTML;
    this.parsed.push(latex);
  }
}
