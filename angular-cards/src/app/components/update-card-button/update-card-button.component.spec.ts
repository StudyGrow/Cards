import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCardButtonComponent } from './update-card-button.component';

describe('UpdateCardButtonComponent', () => {
  let component: UpdateCardButtonComponent;
  let fixture: ComponentFixture<UpdateCardButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCardButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
