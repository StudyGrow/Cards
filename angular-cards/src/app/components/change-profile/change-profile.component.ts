import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpService } from "../../services/http.service";
import { NgForm } from "@angular/forms";
import { User } from "src/app/models/User";
import { UserInfo } from "src/app/models/userInfo";
import { UserService } from "src/app/services/user.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-change-profile",
  templateUrl: "./change-profile.component.html",
  styleUrls: ["./change-profile.component.css"],
})
export class ChangeProfileComponent implements OnInit, OnDestroy {
  public userInfo: UserInfo;
  subscriptions$: Subscription[] = [];
  public user = new User("", "");
  constructor(private http: HttpService, private userService: UserService) {}

  ngOnInit(): void {
    this.user.name = "";
    this.user.surname = "";
    let sub = this.userService.getUserInfo().subscribe((info) => {
      this.userInfo = info;
      if (info && info.user) {
        this.user = info.user;
      }
    });
    this.subscriptions$.push(sub);
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  changeAccount(form: NgForm) {
    this.userService.updateAccount(form.value);
  }
  changePassword(form: NgForm) {
    let sub = this.userService.updatePassword(form.value).subscribe((res) => {
      form.reset();
      sub.unsubscribe();
    });
  }
  setStyle(password, password2) {
    if (
      password2.value &&
      password2.value.length > 5 &&
      password2.value != password.value
    ) {
      return "box-shadow:0 0 3px #CC0000;";
    }
    return "";
  }
  match(s1: string, s2: string) {
    return s1 && s1.length > 7 && s1 === s2;
  }
  validate(form: NgForm) {
    if (
      this.checkEmail(form.value.email) &&
      form.value.username &&
      form.value.username.length >= 5
    ) {
      return true;
    } else {
      return false;
    }
  }
  checkEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }

    return false;
  }
}
