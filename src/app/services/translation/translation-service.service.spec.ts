import { TestBed, inject } from '@angular/core/testing';

import { TranslationServiceService } from './translation-service.service';

describe('TranslationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationServiceService]
    });
  });

  it('should be created', inject([TranslationServiceService], (service: TranslationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
