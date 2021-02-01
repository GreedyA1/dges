import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProjectComponent } from './add-project/add-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectFormModule } from '@dges/forms/project-form';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { UiProjectCardModule } from '@dges/ui/project-card';
import { ProjectsRoutingModule } from '../projects/projects-routing.module';
import { UiImagesControlModule } from '@dges/ui/images-control';
import { environment } from '../../environments/environment';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { FormsSkillsModule } from '@dges/forms/skills';
import { UiSkillsChipModule } from '@dges/ui/skills-chip';
import { AddToolsComponent } from './add-tools/add-tools.component';
import { SkillsControlPanelComponent } from './skills-control-panel/skills-control-panel.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddJobComponent } from './add-job/add-job.component';
import { FormsJobFormModule } from '@dges/forms/job-form';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    UiProjectCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    ProjectFormModule,
    FormsJobFormModule,
    MatDialogModule,
    UiImagesControlModule,
    FormsSkillsModule,
    UiSkillsChipModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  declarations: [AddProjectComponent, AddSkillComponent, AddToolsComponent, SkillsControlPanelComponent, AddJobComponent],
  providers: [
    { provide: 'UploadFacade', useClass: environment.uploadFacade },
    { provide: 'SkillsFacade', useClass: environment.skillsFacade },
    { provide: 'ToolsFacade', useClass: environment.toolsFacade },
    { provide: 'JobsFacade', useClass: environment.jobsFacade },
  ],
  exports: [AddJobComponent],
})
export class AdminModule {}
