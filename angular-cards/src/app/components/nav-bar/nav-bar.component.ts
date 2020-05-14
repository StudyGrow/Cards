import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../models/Card";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { User } from "src/app/models/User";
import { HttpService } from "src/app/services/http.service";
import { CardsService } from "src/app/services/cards.service";
import { Vorlesung } from "src/app/models/Vorlesung";
import { StatesService } from "src/app/services/states.service";
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  public user: User;
  public cards: Card[];
  public errors: string[];

  public loading: boolean = false;
  public constructor(
    private router: Router,
    private titleService: Title,
    private http: HttpService,
    private cardsService: CardsService,
    private statesService: StatesService
  ) {}

  ngOnInit(): void {
    this.setPageTitle();
    this.http.getUser().subscribe((user) => (this.user = user));
    this.statesService.getLoadingState().subscribe((val) => {
      this.loading = val;
    });
    this.http.getErrors().subscribe((errors) => (this.errors = errors));
    if (this.router.url.match(/vorlesung/)) {
      this.cardsService.getCards().subscribe((cards) => {
        this.cards = cards;
      });
    }
  }
  closeAlert(i: number) {
    this.http.removeError(i);
  }
  isActive(path: string): string {
    return path === this.router.url ? "active" : "";
  }
  setPageTitle(): void {
    let currentTitle: string;
    switch (this.router.url) {
      case "/login":
        currentTitle = "Login";
        break;
      case "/signup":
        currentTitle = "Sign Up";
        break;
      case "/":
        currentTitle = "Home";
        break;
      default:
        currentTitle = "Cards";
    }
    this.titleService.setTitle(currentTitle);
  }
  logout() {
    this.http.logout();
    this.user = null;
    this.router.navigate(["/"]);
  }
}
