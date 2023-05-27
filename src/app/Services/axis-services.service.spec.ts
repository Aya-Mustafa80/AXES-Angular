import { TestBed } from '@angular/core/testing';

import { AxisServicesService } from './axis-services.service';

describe('AxisServicesService', () => {
  let service: AxisServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxisServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
