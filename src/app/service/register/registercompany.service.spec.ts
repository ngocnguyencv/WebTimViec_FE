import {TestBed} from '@angular/core/testing';

import {RegistercompanyService} from './registercompany.service';

describe('RegistercompanyService', () => {
  let service: RegistercompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistercompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
