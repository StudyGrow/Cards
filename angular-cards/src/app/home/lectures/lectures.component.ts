import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Vorlesung } from '../../models/Vorlesung';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss'],
})
export class LecturesComponent {
  @Input() lectures: Vorlesung[];

  constructor(private translate: TranslateService) {}

  setLink(lecture: Vorlesung) {
    return '/vorlesung/' + lecture.abrv;
  }
}
