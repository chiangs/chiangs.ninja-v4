import { TestBed, inject } from '@angular/core/testing';

import { ThemeSelectService } from './theme-select.service';

describe('ThemeSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeSelectService]
    });
  });

  it('should be created', inject([ThemeSelectService], (service: ThemeSelectService) => {
    expect(service).toBeTruthy();
  }));
});
