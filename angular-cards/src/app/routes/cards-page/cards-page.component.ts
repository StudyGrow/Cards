import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../../services/http-service.service";
import { StatesService } from "../../services/states.service";
import { Vorlesung } from "src/app/models/Vorlesung";

@Component({
  selector: "app-cards-page",
  templateUrl: "./cards-page.component.html",
  styleUrls: ["./cards-page.component.css"]
})
export class CardsPageComponent implements OnInit {
  public vlAbrv: string;
  public lecture: Vorlesung;
  public loading: boolean = true;
  public formMode: string = "none";
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private stateServie: StatesService
  ) {}

  ngOnInit(): void {
    this.vlAbrv = this.route.snapshot.paramMap.get("abrv");
    this.httpService.getLectureByAbrv(this.vlAbrv).subscribe(resp => {
      if (resp.status == 504) {
        console.log("Server offline");
        this.lecture = { name: "Vorlesung", abrv: this.vlAbrv };
      } else {
        this.lecture = resp.body;
        this.loading = false;
      }
    });

    this.stateServie.getFormMode().subscribe(mode => (this.formMode = mode));
  }
  setLoading(loading: boolean): void {
    this.loading = loading;
  }
}
