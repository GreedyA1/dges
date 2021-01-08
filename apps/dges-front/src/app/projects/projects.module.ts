import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { UiProjectCardModule } from '@dges/ui/project-card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  ProjectsEffects,
  ProjectsReducers,

} from '@dges/store/projects/projects-firebase';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    UiProjectCardModule,
    StoreModule.forRoot(ProjectsReducers.projectsReducer),
    EffectsModule.forRoot([ProjectsEffects.ProjectsEffects]),
    StoreDevtoolsModule.instrument({}),
  ],
  declarations: [ProjectsComponent],
})
export class ProjectsModule {}
