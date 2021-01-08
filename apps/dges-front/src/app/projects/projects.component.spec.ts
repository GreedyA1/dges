import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ProjectsComponent } from './projects.component';
import { of } from 'rxjs';
import { ProjectsState } from '@dges/store/projects/projects-firebase';
import { ProjectsCollectionService } from '@dges/api/projects/firebase';
import { project } from '@dges/data/projects';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let store: MockStore<ProjectsState.ProjectsState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      providers: [
        provideMockStore({}),
        {
          provide: ProjectsCollectionService,
          useValue: {
            projectsGet: jest.fn().mockReturnValue(of([project])),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
