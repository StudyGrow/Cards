import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPageComponent } from './cards-page.component';

describe('CardsPageComponent', () => {
  let component: CardsPageComponent;
  let fixture: ComponentFixture<CardsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
