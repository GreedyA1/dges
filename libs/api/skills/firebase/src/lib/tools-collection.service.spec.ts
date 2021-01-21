import { TestBed } from '@angular/core/testing';

import { ToolsCollectionService } from './tools-collection.service';

describe('ToolsCollectionService', () => {
  let service: ToolsCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolsCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
