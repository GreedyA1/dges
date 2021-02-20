import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormsLoginFormModule } from '@dges/forms/login-form';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    FormsLoginFormModule,
  ],
  declarations: [LoginDialogComponent],
  exports: [LoginDialogComponent],
})
export class UiLoginDialogModule {}
