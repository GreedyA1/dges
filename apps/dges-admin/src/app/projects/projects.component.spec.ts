import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';

import { ProjectsComponent } from './projects.component';
import { ProjectsState } from '@dges/store/projects/projects-firebase';
// import { ProjectsCollectionService } from '@dges/api/projects/firebase';
import { MockComponent } from 'ng-mocks';
import { ProjectCardComponent } from '@dges/ui/project-card';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let store: MockStore<ProjectsState.ProjectsState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent, MockComponent(ProjectCardComponent)],
      // providers: [
      //   provideMockStore({}),
      //   {
      //     provide: ProjectsCollectionService,
      //     useValue: {
      //       getProjects: jest.fn().mockReturnValue(of([project])),
      //     },
      //   },
      // ],
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
