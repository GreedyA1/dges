import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { UiProjectCardModule } from '@dges/ui/project-card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from "../../environments/environment";

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    UiProjectCardModule,
    StoreModule.forRoot(environment.projectsReducer),
    EffectsModule.forRoot([environment.projectsEffect]),
    StoreDevtoolsModule.instrument({}),
  ],
  declarations: [ProjectsComponent],
})
export class ProjectsModule {}
