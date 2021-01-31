import { TestBed } from '@angular/core/testing';

import { JobsCollectionService } from './jobs-collection.service';

describe('JobsCollectionService', () => {
  let service: JobsCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
