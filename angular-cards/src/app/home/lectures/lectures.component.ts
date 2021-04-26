import { Component, Input, OnInit } from '@angular/core';
import { Vorlesung } from '../../models/Vorlesung';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss'],
})
export class LecturesComponent implements OnInit {
  @Input() lectures: Vorlesung[];

  constructor() {}

  ngOnInit(): void {}

  setLink(lecture: Vorlesung) {
    return '/vorlesung/' + lecture.abrv;
  }
}
