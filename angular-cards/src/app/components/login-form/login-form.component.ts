import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/UserActions';
import { AppState } from 'src/app/models/state';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

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
