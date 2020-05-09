import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../models/Card";
import { KatexOptions } from "ng-katex";
import { ViewChild } from "@angular/core";
import { CardsService } from "../../services/cards.service";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @ViewChild("test", { static: true }) content;
  constructor(private cs: CardsService) {}
  public isCollapsed = true;
  ngOnInit(): void {
    this.cs.getActiveCardIndex().subscribe((change) => {
      //hides te card content when carousel slides
      this.content.hide();
    });
  }
}
