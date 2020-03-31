import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../models/Card";
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  @Input() cards: Card[];
  constructor() {}

  ngOnInit(): void {}
}
