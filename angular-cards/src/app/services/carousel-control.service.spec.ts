import { TestBed } from '@angular/core/testing';

import { CarouselControlService } from './carousel-control.service';

describe('CarouselControlService', () => {
  let service: CarouselControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
