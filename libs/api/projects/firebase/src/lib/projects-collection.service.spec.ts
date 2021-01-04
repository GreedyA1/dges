import { TestBed } from '@angular/core/testing';

import { ProjectsCollectionService } from './projects-collection.service';

describe('ProjectsCollectionService', () => {
  let service: ProjectsCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
