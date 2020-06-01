import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
} from "@angular/core";
import { StatesService } from "src/app/services/states.service";
import { NotificationsService } from "src/app/services/notifications.service";
import { Observable, of, BehaviorSubject } from "rxjs";
import { Notification } from "../../models/Notification";
import {
  pulseOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeInOnEnterAnimation,
} from "angular-animations";
import { ScrollDispatcher, CdkScrollable } from "@angular/cdk/overlay";
import { MatDrawerContent } from "@angular/material/sidenav";
@Component({
  selector: "app-view-container",
  templateUrl: "./view-container.component.html",
  styleUrls: ["./view-container.component.css"],
  animations: [
    fadeInOnEnterAnimation({ duration: 200 }),

    pulseOnEnterAnimation({ scale: 1.05, duration: 500 }),
    fadeOutOnLeaveAnimation({ duration: 200 }),
  ],
})
export class ViewContainerComponent implements OnInit {
  public pageOffset: number = 0;
  public subj$ = new BehaviorSubject<boolean>(false);
  public show$: Observable<boolean>;
  @ViewChild("drawer", { static: true }) drawer;

  notifications$: Observable<Notification[]>;
  constructor(
    private scroll: ScrollDispatcher,
    private states: StatesService,
    private notifService: NotificationsService
  ) {}

  setOffset(event) {
    if (event.measureScrollOffset("top") > 50) {
      this.subj$.next(true);
    } else {
      this.subj$.next(false);
    }
    this.pageOffset = event.measureScrollOffset("top");
    console.log(this.pageOffset > 50);
    console.log(this.subj$.getValue());
  }

  showIcon() {
    return this.subj$.asObservable();
  }
  ngOnInit(): void {
    this.show$ = this.showIcon();
    this.scroll.scrolled().subscribe((data: MatDrawerContent) => {
      this.setOffset(data);
    });
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
