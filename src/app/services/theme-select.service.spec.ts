import { TestBed, inject } from '@angular/core/testing';

import { ThemeSelectService } from './theme-select.service';

describe('ThemeSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeSelectService]
    });
  });

  it(
    'should be created',
    inject([ThemeSelectService], (service: ThemeSelectService) => {
      expect(service).toBeTruthy();
    })
  );

  it('should toggle selectedTheme', () => {
    const component = new ThemeSelectService();
    expect(component.selectedTheme).toBe(false, 'at first');
    component.setTheme(true);
    expect(component.selectedTheme).toBe(true, 'after change');
  });
});
