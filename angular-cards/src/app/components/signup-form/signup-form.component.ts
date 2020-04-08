import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpService } from "../../services/http.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"],
})
export class SignupFormComponent implements OnInit {
  constructor(private http: HttpService, private router: Router) {}
  errors;

  ngOnInit(): void {}
  submit(form: NgForm) {
    this.http.createAccount(form.value).subscribe(
      (response) => {
        if (response.status == 200) {
          this.http.login(response.body).subscribe((user) => {
            if (user) {
              this.http.setUser(response.body);
              this.router.navigate(["/"]);
            }
          });
        }
      },
      (error) => {
        if ((error.headers.status = 422)) {
          console.log(error);
          this.errors = error.error.errors;
        }
      }
    );
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
