import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router, NavigationEnd } from "@angular/router";
import { CardsService } from "src/app/services/cards.service";
import { Card } from "src/app/models/Card";

@Component({
  selector: "app-nav-list",
  templateUrl: "./nav-list.component.html",
  styleUrls: ["./nav-list.component.css"],
})
export class NavListComponent implements OnInit {
  loggedIn: boolean;
  onCardRoute: boolean;
  constructor(
    private userService: UserService,
    private cardsService: CardsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.authentication().subscribe((val) => (this.loggedIn = val));
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
    this.userService.logout();
  }
  isActive(path: string): string {
    return path === this.router.url ? "active" : "";
  }
}
