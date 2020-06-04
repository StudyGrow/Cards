import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"],
})
export class SignupFormComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  errors;

  ngOnInit(): void {}
  submit(form: NgForm) {
    this.userService.createAccount(form.value);
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
  checkEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }

    return false;
  }
  getLength(elem) {
    if (elem.value) {
      return elem.value.length;
    } else {
      return 0;
    }
  }
  setCharIndicatorStyle(field, max: number) {
    if (field.value) {
      return {
        color: field.value.length > max ? "#ff0000" : "#000000",
      };
    } else {
      return { color: "#000000" };
    }
  }
  isDisabled(username, email, password, password2) {
    if (!(username.value && email.value && password.value)) {
      return true;
    }
    return (
      username.value.length < 5 ||
      password.value.length < 7 ||
      password.value != password2.value ||
      !this.checkEmail(email.value)
    );
  }
}
