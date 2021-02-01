import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsFormComponent } from './jobs-form/jobs-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsChipsModule } from '@dges/forms/chips';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    FormsChipsModule,
    MatNativeDateModule,
    MatProgressBarModule],
  declarations: [JobsFormComponent],
  exports: [JobsFormComponent],
})
export class FormsJobFormModule {}
