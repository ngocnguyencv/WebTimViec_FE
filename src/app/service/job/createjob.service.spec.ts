import {TestBed} from '@angular/core/testing';

import {CreatejobService} from './createjob.service';

describe('CreatejobService', () => {
  let service: CreatejobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatejobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
