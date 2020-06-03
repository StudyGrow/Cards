import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLectureFormComponent } from './add-lecture-form.component';

describe('AddLectureFormComponent', () => {
  let component: AddLectureFormComponent;
  let fixture: ComponentFixture<AddLectureFormComponent>;

  beforeEach(async(() => {
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
