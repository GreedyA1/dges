import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillFormComponent } from './skill-form/skill-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  declarations: [SkillFormComponent],
  exports: [SkillFormComponent],
})
export class FormsSkillsModule {}
