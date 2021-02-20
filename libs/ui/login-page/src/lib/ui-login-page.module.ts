import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormsLoginFormModule } from '@dges/forms/login-form';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsLoginFormModule,
  ],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
})
export class UiLoginPageModule {}
