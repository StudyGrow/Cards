import { TestBed } from '@angular/core/testing';

import { CardsServiceService } from './cards-service.service';

describe('CardsServiceService', () => {
  let service: CardsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
