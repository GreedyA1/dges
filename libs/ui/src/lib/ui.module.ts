import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SkillsComponent, ProjectComponent, ProjectCardComponent],
  exports: [SkillsComponent, ProjectComponent, ProjectCardComponent],
})
export class UiModule {}
