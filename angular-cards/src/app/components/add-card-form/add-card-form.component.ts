import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { StatesService } from "../../services/states.service";
import { HttpService } from "../../services/http-service.service";
import { Card } from "../../models/Card";
import { Vorlesung } from "src/app/models/Vorlesung";

@Component({
  selector: "app-add-card-form",
  templateUrl: "./add-card-form.component.html",
  styleUrls: ["./add-card-form.component.css"]
})
export class AddCardFormComponent implements OnInit {
  @Input() lecture: Vorlesung;
  newCard: Card;
  hidden: boolean;

  constructor(
    private stateService: StatesService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.stateService.getAddComponentHidden().subscribe(value => {
      this.hidden = value;
    }); //Subscribe to StateService to see if form should be displayed
  }
  setStyle() {
    if (this.hidden === undefined) {
      return {
        display: "none"
      };
    }
    return {
      display: this.hidden ? "none" : "block"
    };
  }
  onSubmit(f: NgForm) {
    console.log(f.value.thema);
    console.log(f.value.content);
    this.newCard = new Card(f.value.thema, f.value.content);
    this.httpService.addCard(this.newCard, this.lecture.abrv).subscribe(id => {
      this.newCard._id = id;
    });
  }
}
