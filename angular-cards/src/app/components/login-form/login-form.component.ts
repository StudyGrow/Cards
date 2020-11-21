import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { login } from "src/app/store/actions/UserActions";
import { CardsEffects } from "src/app/store/effects/effects";
import { Subscription } from "rxjs";
import { LoadFailure } from "src/app/store/actions/cardActions";
import { NotificationsService } from "src/app/services/notifications.service";
import { SuccessMessage } from "src/app/models/Notification";
@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private router: Router,
    private actionState: CardsEffects,
    private notifications: NotificationsService
  ) {}

  public check = true;

  ngOnInit(): void {}
  submit(form: NgForm) {
    this.store.dispatch(login(form.value));
  }

  isDisabled(username, password) {
    if (!(username.value && password.value)) {
      return true;
    }
    return username.value.length < 5 || password.value.length < 7;
  }
}
