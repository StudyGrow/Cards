import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpService } from "../../services/http.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  constructor(private http: HttpService, private router: Router) {}

  ngOnInit(): void {}
  submit(form: NgForm) {
    this.http
      .login(form.value.username, form.value.password, form.value.remember)
      .subscribe((user) => {
        if (user) {
          this.router.navigate(["/"]);
        } else {
          console.error("error");
        }
      });
  }
}
