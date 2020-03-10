import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { StatesService } from "../../services/states.service";
import { CardsService } from "../../services/cards.service";
import { Card } from "../../models/Card";

@Component({
  selector: "app-add-card-form",
  templateUrl: "./add-card-form.component.html",
  styleUrls: ["./add-card-form.component.css"]
})
export class AddCardFormComponent implements OnInit {
  newCard: Card;
  hidden: boolean;

  constructor(
    private stateService: StatesService,
    private cardService: CardsService
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
    this.cardService.addCard(this.newCard).subscribe(id => {
      this.newCard.id = id;
    });
  }
}
