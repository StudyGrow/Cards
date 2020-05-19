import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Card } from "../../models/Card";
import { KatexOptions } from "ng-katex";
import { ViewChild } from "@angular/core";
import { CardsService } from "../../services/cards.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card: Card;
  @ViewChild("test", { static: true }) content;
  subscriptions$: Subscription[] = [];
  constructor(private cs: CardsService) {}
  public isCollapsed = true;
  ngOnInit(): void {
    let sub = this.cs.getActiveCardIndex().subscribe((change) => {
      //hides te card content when carousel slides
      this.content.hide();
    });
    this.subscriptions$.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
