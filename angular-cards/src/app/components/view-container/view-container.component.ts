import { Component, OnInit, ViewChild } from "@angular/core";
import { StatesService } from "src/app/services/states.service";
import { NotificationsService } from "src/app/services/notifications.service";
import { Observable } from "rxjs";
import { Notification } from "../../models/Notification";
import {
  pulseOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from "angular-animations";
@Component({
  selector: "app-view-container",
  templateUrl: "./view-container.component.html",
  styleUrls: ["./view-container.component.css"],
  animations: [
    pulseOnEnterAnimation({ scale: 1.05, duration: 500 }),
    fadeOutOnLeaveAnimation({ duration: 200 }),
  ],
})
export class ViewContainerComponent implements OnInit {
  @ViewChild("drawer", { static: true }) drawer;
  notifications$: Observable<Notification[]>;
  constructor(
    private states: StatesService,
    private notifService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.notifications$ = this.notifService.notifications();
    this.states.toggle().subscribe((val) => {
      if (val === true) {
        this.drawer.open();
      } else {
        this.drawer.close();
      }
    });
  }
  closeAlert(i: number) {
    this.notifService.removeNotification(i);
  }
  setAlertClass(notif: Notification) {
    return `alert alert-${notif.type} alert-dismissible fade show`;
  }
  closing() {
    this.states.closeDrawer();
  }
  backToTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - window.innerHeight * 0.05); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
