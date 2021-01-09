import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class FormsLoginFormModule {
}
