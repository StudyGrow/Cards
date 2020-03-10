import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../../services/http-service.service";
import { Vorlesung } from "src/app/models/Vorlesung";
@Component({
  selector: "app-cards-page",
  templateUrl: "./cards-page.component.html",
  styleUrls: ["./cards-page.component.css"]
})
export class CardsPageComponent implements OnInit {
  public vlAbrv: string;
  public lecture: Vorlesung = { name: "Vorlesung", abrv: "/test" };

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.vlAbrv = this.route.snapshot.paramMap.get("abrv");
    this.httpService.getLectureByAbrv(this.vlAbrv).subscribe(vl => {
      this.lecture = vl;
    });
  }
}
