import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Lecture } from '../../models/Vorlesung';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss'],
})
export class LecturesComponent {
  @Input() lectures: Lecture[];

  constructor(private translate: TranslateService) {}

  setLink(lecture: Lecture) {
    return '/vorlesung/' + lecture.abrv;
  }
}
