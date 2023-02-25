import { Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Store } from '@ngrx/store';
import { DialogData } from 'src/app/models/DialogueData';
import { AppState } from 'src/app/models/state';
import { reportCard } from 'src/app/store/actions/CardActions';
import { changeTab, setFormMode } from 'src/app/store/actions/StateActions';
import { deleteProfile } from 'src/app/store/actions/UserActions';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css'],
})
export class DialogueComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogueComponent>,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  confirm() {
    switch (this.data.type) {
      case DialogueType.CANCEL_EDIT:
        this.store.dispatch(setFormMode({ mode: 'add' }));
        this.store.dispatch(changeTab({ tab: 0 }));
        break;
      case DialogueType.DELETE_PROFILE:
        this.store.dispatch(deleteProfile());

        break;
      case DialogueType.REPORT:
        this.store.dispatch(reportCard());
        break;
      default:
        console.error('unknown type ' + this.data.type, DialogueType['report']);
        break;
    }

    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
export enum DialogueType {
  REPORT = 'report',
  CANCEL_EDIT = 'card-form.cancel',
  DELETE_PROFILE = 'profile.delete',
}
