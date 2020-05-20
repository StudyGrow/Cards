import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpService } from "../../services/http.service";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  constructor(private user: UserService, private router: Router) {}
  public errors;

  ngOnInit(): void {}
  submit(form: NgForm) {
    this.user.login(form.value);
  }

  isDisabled(username, password) {
    if (!(username.value && password.value)) {
      return true;
    }
    return username.value.length < 5 || password.value.length < 7;
  }
}
