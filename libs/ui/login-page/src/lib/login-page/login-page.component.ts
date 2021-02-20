import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  login() {}

  cancel() {}
}
