import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { UserService } from "src/app/services/user.service";
import { Store } from "@ngrx/store";
import { logout } from "src/app/store/actions/UserActions";
import { Router } from "@angular/router";
import { NotificationsService } from "src/app/services/notifications.service";
import { Notification, SuccessMessage } from "src/app/models/Notification";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private user: UserService,
    private store: Store,
    private router: Router,
    private notifs: NotificationsService
  ) {}

  cancel() {
    this.dialogRef.close();
  }
  deleteAcc(): void {
    this.user.removeAcc().subscribe((val) => {
      if (!val) {
        console.log("error");
      } else {
        this.router.navigateByUrl("/");
        setTimeout(() => {
          this.store.dispatch(logout());
          this.notifs.addNotification(
            new SuccessMessage("Dein Account wurde erfolgreich gelöscht")
          );
        }, 100);
      }
    });
    console.log("del");
    this.dialogRef.close();
  }
}
