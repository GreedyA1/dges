import { TestBed } from '@angular/core/testing';

import { EducationCollectionService } from './education-collection.service';

describe('EducationCollectionService', () => {
  let service: EducationCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
