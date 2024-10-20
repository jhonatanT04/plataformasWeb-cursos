import { TestBed } from '@angular/core/testing';

import { IpstackService } from './ipstack.service';

describe('IpstackService', () => {
  let service: IpstackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpstackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
