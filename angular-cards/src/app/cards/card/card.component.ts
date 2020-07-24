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
import { Subscription } from "rxjs";
import { parse, HtmlGenerator } from "latex.js/dist/latex.js";

import { SafeHtmlPipe } from "../../shared/safe-html.pipe";
import { StatesService } from "src/app/services/states.service";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit, OnDestroy {
  constructor(
    private cs: CardsService,
    private states: StatesService,
    private store: Store<any>
  ) {}

  @Input() card: Card;
  @Input() index: number;
  inTypingField: boolean = false;
  activeIndex: number;
  @HostListener("swipeleft", ["$event"]) public swipePrev(event: any) {
    this.cs.goNext();
  }
  @HostListener("swiperight", ["$event"]) public swipeNext(event: any) {
    this.cs.goPrev();
  }

  @HostListener("window:keyup", ["$event"]) handleKeyDown(
    event: KeyboardEvent
  ) {
    if (!this.inTypingField && this.activeIndex == this.index) {
      if (event.key == "ArrowDown") {
        this.content.open();
      } else if (event.key == "ArrowUp") {
        this.content.close();
      }
    }
  }
  @ViewChild("answer", { static: true }) content;
  subscriptions$: Subscription[] = [];

  styleAppend = `<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/css/katex.css"><link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/css/article.css"><script src="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/dist/js/base.js"></script>`;
  parsed: any = [];

  public isCollapsed = true;
  ngOnInit(): void {
    let sub = this.store
      .select("cardsData")
      .pipe(map((state) => state.activeIndex))
      .subscribe((index) => {
        //hides te card content when carousel slides

        this.activeIndex = index || 0;
        this.content.close();
      });
    if (this.card.latex != 0) {
      this.parse(this.card.content);
    } else {
      this.parsed.push(this.card.content);
    }
    this.subscriptions$.push(sub);
    this.store
      .select("cardsData")
      .pipe(map((state) => state.typingMode))
      .subscribe((val) => {
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
    latex = this.styleAppend + doc.body.innerHTML;
    this.parsed.push(latex);
  }
}
