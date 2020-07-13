import { Component, OnInit, OnDestroy } from "@angular/core";
import { StatesService } from "../../services/states.service";
import { CardsService } from "../../services/cards.service";
import { Card } from "../../models/Card";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { Template } from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: "app-update-card-form",
  templateUrl: "./update-card-form.component.html",
  styleUrls: ["./update-card-form.component.css"],
})
export class UpdateCardFormComponent implements OnInit, OnDestroy {
  public cardCopy: Card;
  private cardIndex: number; //saves the cardindex which the user is currently updating
  private activeCardIndex: number; //saves the active cardindex
  subscriptions$: Subscription[] = [];
  constructor(
    private cardsService: CardsService,
    private statesService: StatesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    let sub = this.cardsService.activeCard().subscribe((card) => {
      this.activeCardIndex = card.positionIndex;

      this.cardCopy = { ...card };

      this.cardIndex = this.activeCardIndex;
    });

    this.subscriptions$.push(sub);
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  inField() {
    this.statesService.setTyping(true);
  }
  resetNav() {
    this.statesService.setTyping(false);
  }
  onSubmit(f) {
    this.cardCopy.content = f.value.content;
    this.cardCopy.thema = f.value.thema;
    let sub = this.cardsService
      .updateCard({ ...this.cardCopy }, this.cardIndex)
      .subscribe((resp) => {
        f.reset();
        sub.unsubscribe();
      });
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
          thema.value.length > 200
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
          content.value && content.value.length > 1000 ? "#ff0000" : "#000000",
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
      content.value.length > 1000 ||
      (thema.value.length > 0 && thema.value.length < 3) ||
      thema.value.length > 200
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
    this.service.setLoadingState(false);
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
