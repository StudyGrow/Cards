import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../models/Card";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  @Input() cards: Card[];
  public constructor(private router: Router, private titleService: Title) {}
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

  ngOnInit(): void {
    this.setPageTitle();
  }
}
