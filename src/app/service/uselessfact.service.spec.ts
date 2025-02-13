import { TestBed } from '@angular/core/testing';

import { UselessfactService } from './uselessfact.service';

describe('UselessfactService', () => {
  let service: UselessfactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UselessfactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
