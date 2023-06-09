import { Component, OnDestroy } from '@angular/core';
import { Lecture } from '../../models/Vorlesung';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LecturesService } from 'src/app/services/lectures.service';
import {
  slideInDownOnEnterAnimation,
  slideInRightAnimation,
  slideInRightOnEnterAnimation,
  slideInUpOnEnterAnimation,
} from 'angular-animations';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from 'src/app/services/notifications.service';
import { WarnMessage } from 'src/app/models/Notification';
@Component({
  selector: 'app-add-lecture-form',
  templateUrl: './add-lecture-form.component.html',
  styleUrls: ['./add-lecture-form.component.scss'],
  animations: [slideInUpOnEnterAnimation({ delay: 200 })],
})
export class AddLectureFormComponent implements OnDestroy {
  subscriptions$: Subscription[] = [];
  constructor(
    private router: Router,
    private lectureService: LecturesService,
    private translate: TranslateService,
    private notifications: NotificationsService
  ) {}
  initialized: boolean;

  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  onSubmit(f) {
    let newLecture = new Lecture(f.value.vlname.trim(), f.value.abrv.toLowerCase().trim(), []);

    this.lectureService.checkUniqueLecture(newLecture).subscribe((success) => {
      if (success) {
        localStorage.setItem('vl', JSON.stringify(newLecture));
        this.router.navigateByUrl('/vorlesung/neu');
      } else {
        const m = this.translate.instant('notifications.lecture-abrv-already-exists');
        this.notifications.addNotification(new WarnMessage(m));
      }
    });
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
  getLength(elem) {
    if (elem.value) {
      return elem.value.length;
    } else {
      return 0;
    }
  }
  isDisabled(name, abrv) {
    return (
      !name.value ||
      !abrv.value ||
      abrv.value.trim().length < 3 ||
      abrv.value.trim().length > 7 ||
      name.value.trim().length < 3 ||
      name.value.trim().length > 500
    );
  }
}
