import { TestBed } from '@angular/core/testing';

import { SkillsCollectionService } from './skills-collection.service';

describe('SkillsCollectionService', () => {
  let service: SkillsCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
