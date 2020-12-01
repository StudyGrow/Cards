import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";

import { NotificationsService } from "src/app/services/notifications.service";
import { Observable, BehaviorSubject } from "rxjs";
import { Notification } from "../../models/Notification";
import {
  pulseOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeInOnEnterAnimation,
} from "angular-animations";
import { MatDrawerContent, MatDrawer } from "@angular/material/sidenav";
import { map, startWith } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { selectDrawerState } from "src/app/store/selector";
import { setDrawerState } from "src/app/store/actions/actions";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AppState, Data, Mode } from "src/app/models/state";
@Component({
  selector: "app-view-container",
  templateUrl: "./view-container.component.html",
  styleUrls: ["./view-container.component.scss"],
  animations: [
    fadeInOnEnterAnimation({ duration: 200 }),
    pulseOnEnterAnimation({ scale: 1.05, duration: 500 }),
    fadeOutOnLeaveAnimation({ duration: 200 }),
  ],
})
export class ViewContainerComponent implements OnInit {
  pageOffset: number = 0;
  subj$ = new BehaviorSubject<boolean>(false);
  show$: Observable<boolean>;

  @ViewChild("drawer", { static: true }) drawer: MatDrawer;
  @ViewChild("mainContent", { static: true }) content: MatDrawerContent;
  notifications$: Observable<Notification[]>;
  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<AppState>,
    private notifService: NotificationsService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.show$ = this.content.elementScrolled().pipe(
      startWith(false),
      map(() => this.content.measureScrollOffset("top") > 50)
    );
    this.show$.subscribe(() => {
      this.cdr.detectChanges();
    });
    this.notifications$ = this.notifService.notifications;
    this.notifications$.subscribe((notifs) => {
      notifs.forEach((notif, index) => {
        let ref;
        if (notif.type === "success") {
          ref = this._snackBar.open(notif.message, null, {
            duration: 2000,
            verticalPosition: "bottom",
            panelClass: "success",
          });
        } else {
          ref = this._snackBar.open(notif.message, "Schließen", {
            verticalPosition: "bottom",
            panelClass: notif.type,
          });
        }
        ref
          .afterDismissed()
          .subscribe(() => this.notifService.removeNotification(index));
      });
    });

    this.store.pipe(map(selectDrawerState)).subscribe((val) => {
      val ? this.drawer.open() : this.drawer.close();
    });
  }
  closeAlert(i: number) {
    this.notifService.removeNotification(i);
  }
  setAlertClass(notif: Notification) {
    return `alert alert-${notif.type} alert-dismissible fade show shadow`;
  }
  closing() {
    this.store.dispatch(setDrawerState({ show: false }));
  }
  backToTop() {
    this.content.scrollTo({ top: 0, behavior: "smooth" }); // how far to scroll on each step
  }
}
