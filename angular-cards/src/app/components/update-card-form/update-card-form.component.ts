import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { StatesService } from "../../services/states.service";
import { HttpService } from "../../services/http.service";
import { CardsService } from "../../services/cards.service";
import { Card } from "../../models/Card";
import { Vorlesung } from "../../models/Vorlesung";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-update-card-form",
  templateUrl: "./update-card-form.component.html",
  styleUrls: ["./update-card-form.component.css"],
})
export class UpdateCardFormComponent implements OnInit {
  public cardCopy: Card;
  private cards: Card[];
  private cardIndex: number; //saves the cardindex which the user is currently updating
  private activeCardIndex: number; //saves the active cardindex
  constructor(
    private cardsService: CardsService,
    private httpService: HttpService,
    private statesService: StatesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((cards) => {
      this.cards = cards;
    });
    this.cardsService.getActiveCardIndex().subscribe((index) => {
      this.activeCardIndex = index;
      if (this.cards) {
        this.cardCopy = { ...this.cards[this.activeCardIndex] };
      }
      this.cardIndex = this.activeCardIndex;
    });
  }

  onSubmit(f: NgForm) {
    this.cardCopy.content = f.value.content;
    this.cardCopy.thema = f.value.thema;
    this.cardsService.updateCard({ ...this.cardCopy }, this.cardIndex);
    f.reset();
  }
  cancelEdit() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "400px",
    });
  }

  //Function to set style of small character indicator
  setThemaCharIndicatorStyle(thema) {
    if (thema.value) {
      return {
        color:
          (thema.value && thema.value.length > 0 && thema.value.length < 3) ||
          thema.value.length > 60
            ? "#ff0000"
            : "#000000",
      };
    } else {
      return { color: "#000000" };
    }
  }
  //Function to set style of small character indicator
  setContentCharIndicatorStyle(content) {
    if (content.value) {
      return {
        color:
          content.value && content.value.length > 400 ? "#ff0000" : "#000000",
      };
    } else {
      return { color: "#000000" };
    }
  }

  getLength(elem) {
    if (elem.value) {
      return elem.value.length;
    } else {
      return 0;
    }
  }

  isDisabled(content, thema) {
    if (!content.value || !thema.value) {
      return true;
    }
    return (
      content.value.length > 400 ||
      (thema.value.length > 0 && thema.value.length < 3) ||
      thema.value.length > 60
    );
  }
}
@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "dialog.html",
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private service: StatesService
  ) {}

  cancel() {
    this.service.setFormMode("reset");

    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
