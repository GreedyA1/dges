import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dges-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent {
  form = new FormGroup({
    loginForm: new FormControl({
      emailFormControl: '',
      passwordFormControl: '',
    }),
  });

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>) {}

  login() {
    this.dialogRef.close(this.form.controls.loginForm.value);
  }

  cancel() {
    this.dialogRef.close();
  }
}
