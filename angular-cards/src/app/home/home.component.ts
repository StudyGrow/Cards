import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  authenticated$: Observable<boolean>;
  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.authenticated$ = this.user.authentication();
  }
}
