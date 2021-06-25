import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureReportComponent } from './lecture-report.component';

describe('LectureReportComponent', () => {
  let component: LectureReportComponent;
  let fixture: ComponentFixture<LectureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
