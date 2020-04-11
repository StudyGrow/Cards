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
  public errors;
  ngOnInit(): void {}
  submit(form: NgForm) {
    this.http.login(form.value).subscribe(
      (response) => {
        if (response.status == 200) {
          this.router.navigate(["/"]);
        }
      },
      (error) => {
        if ((error.headers.status = 422)) {
          this.errors = error.error.errors;
        }
      }
    );
  }

  isDisabled(username, password) {
    if (!(username.value && password.value)) {
      return true;
    }
    return username.value.length < 5 || password.value.length < 7;
  }
}
