import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { StatesService } from "../../services/states.service";
import { CardsService } from "../../services/cards.service";
import { Card } from "../../models/Card";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/reducer";
import { map, share } from "rxjs/operators";
import { updateCard } from "src/app/store/actions/cardActions";
import { CardsEffects } from "src/app/store/effects/effects";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-update-card-form",
  templateUrl: "./update-card-form.component.html",
  styleUrls: ["./update-card-form.component.css"],
})
export class UpdateCardFormComponent implements OnInit, OnDestroy {
  @ViewChild("f") form: NgForm;
  public cardCopy: Card;
  private cardIndex: number; //saves the cardindex which the user is currently updating
  private activeCardIndex: number; //saves the active cardindex
  subscriptions$: Subscription[] = [];
  constructor(
    private cardsService: CardsService,
    private statesService: StatesService,
    public dialog: MatDialog,
    private store: Store<any>,
    private actionState: CardsEffects
  ) {}

  ngOnInit(): void {
    let sub = this.store.select("cardsData").subscribe((data) => {
      this.activeCardIndex = data.activeIndex;

      this.cardCopy = { ...data.cardsData.cards[this.activeCardIndex] };

      this.cardIndex = this.activeCardIndex;
    });
    this.subscriptions$.push(sub);
    sub = this.actionState.addCard$.subscribe((res) => this.form.reset());
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
    let sub = this.store.dispatch(updateCard({ card: this.cardCopy }));
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
          thema.value.length > 500
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
      thema.value.length > 500
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
