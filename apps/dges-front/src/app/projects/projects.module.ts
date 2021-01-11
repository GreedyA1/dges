import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { UiProjectCardModule } from '@dges/ui/project-card';
import { ProjectFormModule } from '@dges/forms/project-form';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    UiProjectCardModule,
    ProjectFormModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProjectsComponent
  ],
})
export class ProjectsModule {}
