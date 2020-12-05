import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { EducationCardComponent } from './education-card/education-card.component';
import { JobCardComponent } from './job-card/job-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { CertificateCardComponent } from './certificate-card/certificate-card.component';
import { ToolsComponent } from './tools/tools.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SkillsComponent,  ProjectCardComponent, EducationCardComponent, JobCardComponent, ContactFormComponent, ContactCardComponent, ProjectDetailsComponent, JobDetailsComponent, EducationDetailsComponent, CertificateCardComponent, ToolsComponent, NotFoundComponent],
  exports: [SkillsComponent, ProjectCardComponent, EducationCardComponent, JobCardComponent, ContactFormComponent, ContactCardComponent, ProjectDetailsComponent, JobDetailsComponent, EducationDetailsComponent, CertificateCardComponent, ToolsComponent, NotFoundComponent],
})
export class UiModule {}
