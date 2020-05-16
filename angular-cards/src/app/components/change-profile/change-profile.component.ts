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
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getUserInfo().subscribe((info) => (this.userInfo = info));
  }

  changeAccount(form: NgForm) {
    console.log(form.value);
  }
  changePassword(form: NgForm) {
    console.log(form.value);
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
