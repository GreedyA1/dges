import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProjectComponent } from './add-project/add-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectFormModule } from '@dges/forms/project-form'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { UiProjectCardModule } from '@dges/ui/project-card';
import { ProjectsRoutingModule } from '../projects/projects-routing.module';
import { UiUploadImagesModule } from '@dges/ui/upload-images';
import { UiUploadTaskModule } from '@dges/ui/upload-task';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    UiProjectCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    ProjectFormModule,
    MatDialogModule,
    UiUploadImagesModule,
    UiUploadTaskModule
  ],
  declarations: [AddProjectComponent],
})
export class AdminModule { }
