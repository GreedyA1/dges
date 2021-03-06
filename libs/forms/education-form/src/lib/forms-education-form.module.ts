import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationFormComponent } from './education-form/education-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
  ],
  declarations: [EducationFormComponent],
  exports: [EducationFormComponent],
})
export class FormsEducationFormModule {}
