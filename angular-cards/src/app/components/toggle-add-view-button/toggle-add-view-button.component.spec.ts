import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleAddViewButtonComponent } from './toggle-add-view-button.component';

describe('ToggleAddViewButtonComponent', () => {
  let component: ToggleAddViewButtonComponent;
  let fixture: ComponentFixture<ToggleAddViewButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleAddViewButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleAddViewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
