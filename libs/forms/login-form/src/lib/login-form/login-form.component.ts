import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'dges-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginFormComponent),
      multi: true,
    },
  ],
})
export class LoginFormComponent implements ControlValueAccessor {
  public isDisabled = false;

  // Function to call when the input is touched (when a star is clicked).
  onTouched: () => void;

  onChanged: any;

  writeValue(obj: any): void {
    this.loginForm.setValue(obj);

    this.loginForm.valueChanges.subscribe((res) => {
      if (this.onChanged) this.onChanged(this.loginForm.value);
    });
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  loginForm = new FormGroup({
    emailFormControl: new FormControl(
      { value: null, disabled: this.isDisabled },
      [Validators.required, Validators.email]
    ),
    passwordFormControl: new FormControl(
      { value: null, disabled: this.isDisabled },
      [Validators.required]
    ),
  });

  get emailFormControl() {
    return this.loginForm.controls['emailFormControl'];
  }

  get passwordFormControl() {
    return this.loginForm.controls['passwordFormControl'];
  }

  matcher = new MyErrorStateMatcher();
}
