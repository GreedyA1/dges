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
    UiImagesControlModule,
    FormsSkillsModule,
    UiSkillsChipModule,
  ],
  declarations: [AddProjectComponent, AddSkillComponent, AddToolsComponent],
  providers: [
    { provide: 'UploadFacade', useClass: environment.uploadFacade },
    { provide: 'SkillsFacade', useClass: environment.skillsFacade },
    { provide: 'ToolsFacade', useClass: environment.toolsFacade },
  ],
})
export class AdminModule {}
