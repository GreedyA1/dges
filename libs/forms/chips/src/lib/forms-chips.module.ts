import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips/chips.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatIconModule,
    DragDropModule
  ],
  declarations: [ChipsComponent],
  exports: [ChipsComponent],
})
export class FormsChipsModule {}
