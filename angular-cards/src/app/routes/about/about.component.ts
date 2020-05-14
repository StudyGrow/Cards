import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../services/http.service";
import { from } from "rxjs";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  public loggedIn: boolean;
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getUser().subscribe((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }
}
