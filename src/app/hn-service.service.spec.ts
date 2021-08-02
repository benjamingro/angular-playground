import { TestBed } from '@angular/core/testing';

import { HnServiceService } from './hn-service.service';

describe('HnServiceService', () => {
  let service: HnServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HnServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
