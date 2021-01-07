import { TestBed } from '@angular/core/testing';

import { PublicapisService } from './publicapis.service';

describe('PublicapisService', () => {
  let service: PublicapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
