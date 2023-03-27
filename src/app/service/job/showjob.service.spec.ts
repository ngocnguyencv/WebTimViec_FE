import {TestBed} from '@angular/core/testing';

import {ShowjobService} from './showjob.service';

describe('ShowjobService', () => {
  let service: ShowjobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowjobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
