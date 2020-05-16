import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../services/http.service";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-change-profile",
  templateUrl: "./change-profile.component.html",
  styleUrls: ["./change-profile.component.css"],
})
export class ChangeProfileComponent implements OnInit {
  public userInfo;
  public user = { username: "", email: "" };
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getUserInfo().subscribe((info) => {
      this.userInfo = info;
      if (info && info.user) {
        this.user = info.user;
      }
    });
  }

  changeAccount(form: NgForm) {
    this.http.updateAccount(form.value);
  }
  changePassword(form: NgForm) {
    this.http.updatePassword(form.value).subscribe((res) => {
      form.reset();
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
