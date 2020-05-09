import { Component, OnInit, Input } from "@angular/core";

import { Card } from "../../models/Card";
import { KatexOptions } from 'ng-katex';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  paragraph: string = `
  You can write text, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know.
  You also can write expressions in display mode as follows: $$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$$.
  In first case you will need to use \\$expression\\$ and in the second one \\$\\$expression\\$\\$.
  To scape the \\$ symbol it's mandatory to write as follows: \\\\$
`;
  constructor() {}
  public isCollapsed = true;
  ngOnInit(): void {}
}
