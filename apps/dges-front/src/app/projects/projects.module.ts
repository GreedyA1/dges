import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { UiProjectCardModule } from '@dges/ui/project-card';
import { ProjectsRootStateModule } from './+state/projects-root-state.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    UiProjectCardModule,
    ProjectsRootStateModule,
  ],
  declarations: [ProjectsComponent],
})
export class ProjectsModule {}
