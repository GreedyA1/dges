import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthFacade } from '@dges/store/auth/firebase';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'dges-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  form = new FormGroup({
    loginForm: new FormControl({
      emailFormControl: '',
      passwordFormControl: '',
    }),
  });

  constructor(private authFacade: AuthFacade, private router: Router) {}

  login() {
    this.authFacade.login(
      this.emailFormControlValue,
      this.passwordFormControlValue
    );
  }

  get emailFormControlValue() {
    return this.form.controls.loginForm.value.emailFormControl;
  }

  get passwordFormControlValue() {
    return this.form.controls.loginForm.value.passwordFormControl;
  }
}
