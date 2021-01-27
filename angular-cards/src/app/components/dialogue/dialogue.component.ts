import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DialogData } from 'src/app/models/DialogueData';
import { AppState } from 'src/app/models/state';
import { changeTab, setFormMode } from 'src/app/store/actions/StateActions';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css'],
})
export class DialogueComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogueComponent>,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  ngOnInit() {}
  cancel() {
    this.store.dispatch(setFormMode({ mode: 'add' }));
    this.store.dispatch(changeTab({ tab: 0 }));
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
