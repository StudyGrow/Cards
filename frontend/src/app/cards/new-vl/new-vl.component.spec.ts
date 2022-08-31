import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewVlComponent } from './new-vl.component';

describe('NewVlComponent', () => {
  let component: NewVlComponent;
  let fixture: ComponentFixture<NewVlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewVlComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
