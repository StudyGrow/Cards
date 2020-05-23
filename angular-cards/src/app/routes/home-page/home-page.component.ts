import { Component, OnInit } from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";
import { StatesService } from "../../services/states.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  constructor(private statesService: StatesService) {}

  ngOnInit(): void {}
}
