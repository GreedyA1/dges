import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectFormComponent} from "./project-form/project-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsChipsModule} from "@dges/forms/chips"


@NgModule({
  declarations: [ProjectFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    FormsChipsModule
  ],
  providers: [
    MatDatepickerModule,
  ],
  exports : [ProjectFormComponent]
})
export class ProjectFormModule { }
0
