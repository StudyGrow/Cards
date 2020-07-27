import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router, NavigationEnd } from "@angular/router";
import { CardsService } from "src/app/services/cards.service";
import { Card } from "src/app/models/Card";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { authenticated } from "src/app/store/selector";
import { Observable } from "rxjs";
import { logoutUser } from "src/app/store/actions/UserActions";

@Component({
  selector: "app-nav-list",
  templateUrl: "./nav-list.component.html",
  styleUrls: ["./nav-list.component.css"],
})
export class NavListComponent implements OnInit {
  loggedIn: boolean;
  onCardRoute: boolean;
  loggedIn$: Observable<boolean>;

  constructor(
    private userService: UserService,
    private cardsService: CardsService,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.loggedIn$ = this.store.select("cardsData").pipe(map(authenticated));

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (this.router.url.match(/vorlesung/)) {
          this.onCardRoute = true;
        } else {
          this.onCardRoute = false;
        }
        this.userService.clearAccountInfo();
      }
    });
  }
  logout() {
    this.store.dispatch(logoutUser());
    this.router.navigateByUrl("/");
  }
  isActive(path: string): string {
    return path === this.router.url ? "active" : "";
  }
}
