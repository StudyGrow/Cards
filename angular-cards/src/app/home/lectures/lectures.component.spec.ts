import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LecturesComponent } from './lectures.component';

describe('LecturesComponent', () => {
  let component: LecturesComponent;
  let fixture: ComponentFixture<LecturesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
