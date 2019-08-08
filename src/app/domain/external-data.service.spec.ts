import { TestBed } from '@angular/core/testing';

import { ExternalDataService } from './external-data.service';

describe('ExternalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalDataService = TestBed.get(ExternalDataService);
    expect(service).toBeTruthy();
  });
});
