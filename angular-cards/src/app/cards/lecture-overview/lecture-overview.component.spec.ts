import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureOverviewComponent } from './lecture-overview.component';

describe('LectureOverviewComponent', () => {
  let component: LectureOverviewComponent;
  let fixture: ComponentFixture<LectureOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
