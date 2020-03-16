import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { StatesService } from "../../services/states.service";
import { HttpService } from "../../services/http-service.service";
import { Card } from "../../models/Card";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-update-card-form",
  templateUrl: "./update-card-form.component.html",
  styleUrls: ["./update-card-form.component.css"]
})
export class UpdateCardFormComponent implements OnInit {
  @Input() card: Card;
  @Output() returnCard: EventEmitter<Card> = new EventEmitter();

  hidden: boolean;
  constructor(
    private stateService: StatesService,
    private httpService: HttpService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    this.httpService.updateCard(this.card).subscribe(resp => {
      this.card._id = resp.body;
      this.returnCard.emit(this.card);
      f.reset();
    });
  }
  cancelEdit() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "400px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "dialog.html"
})
export class DialogOverviewExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}

  cancel() {
    console.log("cancelled");
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
