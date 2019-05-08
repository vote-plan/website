import { TestBed } from '@angular/core/testing';

import { ElectionDataService } from './election-data.service';

describe('ElectionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectionDataService = TestBed.get(ElectionDataService);
    expect(service).toBeTruthy();
  });
});
