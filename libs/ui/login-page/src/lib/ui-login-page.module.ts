import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormsLoginFormModule } from '@dges/forms/login-form';
import { StoreAuthFirebaseModule } from '@dges/store/auth/firebase'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsLoginFormModule,
    StoreAuthFirebaseModule
  ],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
})
export class UiLoginPageModule {}
