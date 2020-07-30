import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";

import { Card } from "../../models/Card";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Subscription } from "rxjs";

import { Store } from "@ngrx/store";

import {
  updateCard,
  setActiveCardIndex,
} from "src/app/store/actions/cardActions";
import { CardsEffects } from "src/app/store/effects/effects";
import { NgForm } from "@angular/forms";
import { setFormMode, setTypingMode } from "src/app/store/actions/actions";
import { share, map } from "rxjs/operators";
import { selectActiveIndex, selectCurrentCard } from "src/app/store/selector";

@Component({
  selector: "app-update-card-form",
  templateUrl: "./update-card-form.component.html",
  styleUrls: ["./update-card-form.component.scss"],
})
export class UpdateCardFormComponent implements OnInit, OnDestroy {
  public cardCopy: Card = new Card();
  private cardIndex: number; //saves the cardindex which the user is currently updating
  private activeCardIndex: number; //saves the active cardindex
  private subscriptions$: Subscription[] = [];
  private data$ = this.store.select("cardsData").pipe(share());

  constructor(
    public dialog: MatDialog,
    private store: Store<any>,
    private actionState: CardsEffects
  ) {}

  @ViewChild("f") form: NgForm;

  ngOnInit(): void {
    let sub = this.data$.pipe(map(selectActiveIndex)).subscribe((index) => {
      this.activeCardIndex = index;

      this.cardIndex = this.activeCardIndex;
    });
    this.subscriptions$.push(sub);

    sub = this.data$.pipe(map(selectCurrentCard)).subscribe((card) => {
      this.cardCopy = { ...card };
    });
    this.subscriptions$.push(sub);
    sub = this.actionState.updateCard$.subscribe(() => {
      this.store.dispatch(setFormMode({ mode: "reset" }));

      this.form.reset();
    });
    this.subscriptions$.push(sub);
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  inField() {
    this.store.dispatch(setTypingMode({ typing: true }));
  }
  resetNav() {
    this.store.dispatch(setTypingMode({ typing: false }));
  }
  onSubmit(f) {
    console.log(f.value)
    this.cardCopy.content = f.value.content;
    this.cardCopy.thema = f.value.thema;

    this.store.dispatch(updateCard({ card: this.cardCopy }));
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

    private store: Store<any>
  ) {}

  cancel() {
    this.store.dispatch(setFormMode({ mode: "reset" }));
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
