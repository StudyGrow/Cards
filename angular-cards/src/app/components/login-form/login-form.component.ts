import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/UserActions';
import { AppState } from 'src/app/models/state';
import { MatCheckbox } from '@angular/material/checkbox';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  enableSession: boolean = true;
  constructor(private store: Store<AppState>) {}

  public check = true;

  submit(form: NgForm) {
    this.store.dispatch(login({ ...form.value, enable_session: this.enableSession }));
  }

  isDisabled(username, password) {
    if (!(username.value && password.value)) {
      return true;
    }
    return username.value.length < 5 || password.value.length < 7;
  }
}
