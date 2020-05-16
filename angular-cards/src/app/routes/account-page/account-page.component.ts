import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-account-page",
  templateUrl: "./account-page.component.html",
  styleUrls: ["./account-page.component.css"],
})
export class AccountPageComponent implements OnInit {
  public page: string;
  constructor() {}

  ngOnInit(): void {
    this.page = "overview";
  }

  changePage(e: Event, s: string) {
    e.preventDefault;
    this.page = s;
  }
  setClass(s: string) {
    if (this.page === s) {
      return "list-group-item list-group-item-action active";
    } else {
      return "list-group-item list-group-item-action";
    }
  }
}
