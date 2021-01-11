import { TestBed } from '@angular/core/testing';

import { ProjectsCollectionService } from './projects-collection.service';
import { of } from 'rxjs';
import { project } from '@dges/data/projects';
import { AngularFirestore } from '@angular/fire/firestore';

describe('ProjectsCollectionService', () => {
  let service: ProjectsCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AngularFirestore,
        {
          provide: ProjectsCollectionService,
          useValue: {
            collection: jest.fn().mockReturnValue(of([project])),
          },
        },
      ],
    });
    service = TestBed.inject(ProjectsCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
