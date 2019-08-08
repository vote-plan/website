import { TestBed } from '@angular/core/testing';

import { PdfGenerateService } from './pdf-generate.service';

describe('PdfGenerateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfGenerateService = TestBed.get(PdfGenerateService);
    expect(service).toBeTruthy();
  });
});
