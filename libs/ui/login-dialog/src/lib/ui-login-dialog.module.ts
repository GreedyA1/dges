import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsLoginFormModule} from "@dges/forms/login-form";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsLoginFormModule, MatCardModule, MatButtonModule],
  declarations: [LoginDialogComponent],
  exports: [LoginDialogComponent],
})
export class UiLoginDialogModule {}
