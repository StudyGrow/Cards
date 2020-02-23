import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardButtonComponent } from './add-card-button.component';

describe('AddCardButtonComponent', () => {
  let component: AddCardButtonComponent;
  let fixture: ComponentFixture<AddCardButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCardButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
