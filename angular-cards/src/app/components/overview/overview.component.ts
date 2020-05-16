import { Component, OnInit } from "@angular/core";
import { UserInfo } from "../../models/userInfo";
import { HttpService } from "src/app/services/http.service";
import { User } from "src/app/models/User";
@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"],
})
export class OverviewComponent implements OnInit {
  public userInfo: UserInfo;
  public user = new User("", "");
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getUserInfo().subscribe((info) => {
      this.userInfo = info;
      if (info && info.user) {
        this.user = info.user;
      }
    });
  }
}
