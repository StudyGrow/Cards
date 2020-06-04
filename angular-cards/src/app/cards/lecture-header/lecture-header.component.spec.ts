import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureHeaderComponent } from './lecture-header.component';

describe('LectureHeaderComponent', () => {
  let component: LectureHeaderComponent;
  let fixture: ComponentFixture<LectureHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
