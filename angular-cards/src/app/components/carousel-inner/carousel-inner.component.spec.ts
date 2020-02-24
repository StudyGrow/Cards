import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselInnerComponent } from './carousel-inner.component';

describe('CarouselInnerComponent', () => {
  let component: CarouselInnerComponent;
  let fixture: ComponentFixture<CarouselInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
