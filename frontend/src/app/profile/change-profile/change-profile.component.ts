import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserInfo } from 'src/app/models/UserInfo';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { USER_INFO } from 'src/app/store/selectors/selector';
import { updateUserData } from 'src/app/store/actions/UserActions';
import { DialogueComponent } from 'src/app/components/dialogue/dialogue.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { AppState } from 'src/app/models/State';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.scss'],
})
export class ChangeProfileComponent implements OnInit, OnDestroy {
  public userInfo: UserInfo;
  subscriptions$: Subscription[] = [];
  public user = new User();
  fileToUpload: File = null;
  constructor(
    private translate: TranslateService,
    private userService: UserService,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.user.name = '';
    this.user.surname = '';

    let sub = this.store.select(USER_INFO).subscribe((info) => {
      this.userInfo = info;
      if (info && info.user) {
        this.user = { ...info.user };
      }
    });
    this.subscriptions$.push(sub);
  }
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  changeAccount(form: NgForm) {
    this.store.dispatch(updateUserData(form.value));
  }
  changePassword(form: NgForm) {
    let sub = this.userService.updatePassword(form.value).subscribe((res) => {
      form.reset();
      sub.unsubscribe();
    });
  }
  handleFileInput(file: File) {
    const formData: FormData = new FormData();
    this.fileToUpload = file;
    formData.append('fileKey', this.fileToUpload);
    this.userService.uploadFile(formData).subscribe((success) => {});
  }
  setStyle(password, password2) {
    if (password2.value && password2.value.length > 5 && password2.value != password.value) {
      return 'box-shadow:0 0 3px #CC0000;';
    }
    return '';
  }
  match(s1: string, s2: string) {
    return s1 && s1.length > 7 && s1 === s2;
  }
  validate(form: NgForm) {
    if (form.value.username && form.value.username.length >= 5) {
      return true;
    } else {
      return false;
    }
  }
  checkEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }

    return false;
  }
  delete() {
    this.dialog.open(DialogueComponent, {
      width: '400px',
      data: {
        title: this.translate.instant('profile.manage.dialog.title'),
        content: this.translate.instant('profile.manage.dialog.content'),
        abortText: this.translate.instant('profile.manage.dialog.abort'),
        proceedText: this.translate.instant('profile.manage.dialog.confirm'),
        type: 'profile.delete',
      },
    });
  }
}
