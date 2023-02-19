import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddLectureFormComponent } from './add-lecture-form.component';

describe('AddLectureFormComponent', () => {
  let component: AddLectureFormComponent;
  let fixture: ComponentFixture<AddLectureFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLectureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLectureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
