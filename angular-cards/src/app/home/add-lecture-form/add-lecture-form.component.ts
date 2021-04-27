import { Component, OnInit } from '@angular/core';
import { Vorlesung } from '../../models/Vorlesung';
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
@Component({
  selector: 'app-add-lecture-form',
  templateUrl: './add-lecture-form.component.html',
  styleUrls: ['./add-lecture-form.component.scss'],
  animations: [slideInUpOnEnterAnimation({ delay: 200 })],
})
export class AddLectureFormComponent implements OnInit {
  subscriptions$: Subscription[] = [];
  constructor(private router: Router, private lectureService: LecturesService, private translate: TranslateService) {}
  initialized: boolean;

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscriptions$.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  onSubmit(f) {
    let newLecture = new Vorlesung(f.value.vlname.trim(), f.value.abrv.toLowerCase().trim(), []);

    this.lectureService.checkUniqueLecture(newLecture).subscribe((success) => {
      if (success) {
        localStorage.setItem('vl', JSON.stringify(newLecture));
        this.router.navigateByUrl('/vorlesung/neu');
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
