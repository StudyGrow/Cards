import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createAccount } from 'src/app/store/actions/UserActions';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  constructor(private store: Store) {}

  submit(form: NgForm) {
    this.store.dispatch(createAccount(form.value));
  }
  setStyle(password, password2) {
    if (password2.value && password2.value.length > 5 && password2.value != password.value) {
      return 'box-shadow:0 0 3px #CC0000;';
    }
    return '';
  }
  checkEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    // console.log('not email');
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
        color: field.value.length > max ? '#ff0000' : '#000000',
      };
    } else {
      return { color: '#000000' };
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
