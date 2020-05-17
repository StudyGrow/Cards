import { Component, OnInit } from "@angular/core";
import { UserInfo } from "../../models/userInfo";
import { HttpService } from "src/app/services/http.service";
import { User } from "src/app/models/User";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.css"],
})
export class OverviewComponent implements OnInit {
  public userInfo: UserInfo;
  public user = new User("", "");
  constructor(private http: HttpService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((info) => {
      this.userInfo = info;
      if (info && info.user) {
        this.user = info.user;
      }
    });
  }
}
