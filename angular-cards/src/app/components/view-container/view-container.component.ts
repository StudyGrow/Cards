import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
  ChangeDetectorRef,
} from "@angular/core";

import { NotificationsService } from "src/app/services/notifications.service";
import { Observable, of, BehaviorSubject } from "rxjs";
import { Notification } from "../../models/Notification";
import {
  pulseOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeInOnEnterAnimation,
} from "angular-animations";
import { ScrollDispatcher, CdkScrollable } from "@angular/cdk/overlay";
import { MatDrawerContent, MatDrawer } from "@angular/material/sidenav";
import { map, startWith } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { selectDrawerState } from "src/app/store/selector";
import { setDrawerState } from "src/app/store/actions/actions";
import { Router } from "@angular/router";
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

  @ViewChild("drawer", { static: true }) drawer: MatDrawer;
  @ViewChild("mainContent", { static: true }) content: MatDrawerContent;
  notifications$: Observable<Notification[]>;
  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store<any>,
    private notifService: NotificationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.show$ = this.content.elementScrolled().pipe(
      startWith(false),
      map(() => this.content.measureScrollOffset("top") > 50)
    );
    this.show$.subscribe((val) => {
      this.cdr.detectChanges();
    });
    this.notifications$ = this.notifService.notifications();
    this.store
      .select("cardsData")
      .pipe(map(selectDrawerState))
      .subscribe((val) => {
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
    return `alert alert-${notif.type} alert-dismissible fade show shadow`;
  }
  closing() {
    this.store.dispatch(setDrawerState({ show: false }));
  }
  backToTop() {
    this.content.scrollTo({ top: 0, behavior: "smooth" }); // how far to scroll on each step
  }
}
