import {TestBed} from '@angular/core/testing';

import {EditjobService} from './editjob.service';

describe('EditjobService', () => {
  let service: EditjobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditjobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
