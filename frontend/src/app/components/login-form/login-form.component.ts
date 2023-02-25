import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/UserActions';
import { AppState } from 'src/app/models/state';
import { MatLegacyCheckbox as MatCheckbox } from '@angular/material/legacy-checkbox';
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

  isDisabled(email, password) {
    if (!(email.value && password.value)) {
      return true;
    }
    return email.value.length < 5 || password.value.length < 7;
  }
}
