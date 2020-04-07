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

  ngOnInit(): void {}
  submit(form: NgForm) {
    this.http.createAccount(form.value).subscribe((response) => {
      if (response.status == 200) {
        this.router.navigate(["/"]);
      }
    });
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
  isDisabled(username, email, password) {
    if (!(username.value && email.value && password.value)) {
      return true;
    }
    return (
      username.value.length < 5 ||
      password.value.length < 7 ||
      !this.checkEmail(email.value)
    );
  }
}
