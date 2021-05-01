import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardsOverviewComponent } from './cards-overview.component';

describe('CardsOverviewComponent', () => {
  let component: CardsOverviewComponent;
  let fixture: ComponentFixture<CardsOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
