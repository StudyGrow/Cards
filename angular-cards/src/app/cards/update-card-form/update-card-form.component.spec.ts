import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCardFormComponent } from './update-card-form.component';

describe('UpdateCardFormComponent', () => {
  let component: UpdateCardFormComponent;
  let fixture: ComponentFixture<UpdateCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
