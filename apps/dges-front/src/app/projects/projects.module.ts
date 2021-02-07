import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { UiProjectCardModule } from '@dges/ui/project-card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProjectFormModule } from '@dges/forms/project-form';
import { AdminModule } from '../admin/admin.module';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    UiProjectCardModule,
    ProjectFormModule,
    MatButtonModule,
    MatIconModule,
    AdminModule,
    MatProgressSpinnerModule,
  ],
  declarations: [ProjectsComponent],
  providers: [{ provide: 'UploadFacade', useClass: environment.uploadFacade }],
})
export class ProjectsModule {}
