import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../models/Card";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { User } from "src/app/models/User";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  @Input() cards: Card[];
  public user: User;
  public constructor(
    private router: Router,
    private titleService: Title,
    private http: HttpService
  ) {}
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
logout(){
  this.http.logout();
  this.user=null
  this.router.navigate(["/"]);
}
  ngOnInit(): void {
    this.setPageTitle();
    this.user = this.http.getUser();
  }
}
