import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { UiProjectCardModule } from '@dges/ui/project-card';
import { UiUploadImagesModule } from '@dges/ui/upload-images';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProjectFormModule } from '@dges/forms/project-form';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    UiProjectCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    ProjectFormModule,
    AdminModule,
    MatProgressSpinnerModule,
    UiUploadImagesModule
  ],
  declarations: [
    ProjectsComponent
  ],
})
export class ProjectsModule {}
