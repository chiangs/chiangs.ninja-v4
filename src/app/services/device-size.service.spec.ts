import { TestBed, inject } from '@angular/core/testing';

import { DeviceSizeService } from './device-size.service';

describe('DeviceSizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceSizeService]
    });
  });

  it(
    'should be created',
    inject([DeviceSizeService], (service: DeviceSizeService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should return true isMobileDevice width',
    inject([DeviceSizeService], (service: DeviceSizeService) => {
      expect(service.isMobileDevice()).toBe(service.width <= 1366);
    })
  );
});
