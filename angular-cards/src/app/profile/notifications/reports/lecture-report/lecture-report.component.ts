import { Component, Input } from '@angular/core';
import { Vorlesung } from 'src/app/models/Vorlesung';

@Component({
  selector: 'app-lecture-report',
  templateUrl: './lecture-report.component.html',
  styleUrls: ['./lecture-report.component.scss'],
})
export class LectureReportComponent {
  @Input() lectureReport: Vorlesung;
  constructor() {}
}
