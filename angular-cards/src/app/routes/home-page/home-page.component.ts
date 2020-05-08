import { Component, OnInit } from "@angular/core";
import { Vorlesung } from "../../models/Vorlesung";
import { StatesService } from "../../services/states.service";
import { from } from "rxjs";
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  public loading: boolean = false;
  public newVl: Vorlesung;
  constructor(private statesService: StatesService) {}

  ngOnInit(): void {
    this.statesService.getLoadingState().subscribe((val) => {
      this.loading = val;
    });
  }

  emitVl(lecture: Vorlesung) {
    console.log("vl: ", lecture);
    this.newVl = lecture;
  }
}
