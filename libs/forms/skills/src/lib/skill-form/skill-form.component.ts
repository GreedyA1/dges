import { Component, forwardRef } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ControlValueAccessor,
  ValidationErrors,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'dges-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SkillFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SkillFormComponent),
      multi: true,
    },
  ],
})
export class SkillFormComponent implements ControlValueAccessor {
  public isDisabled = false;

  public skillForm = new FormGroup({
    id: new FormControl({ value: null, disabled: this.isDisabled }, []),
    title: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    image: new FormControl({ value: null, disabled: this.isDisabled }, []),
  });

  onTouched: () => void;

  writeValue(val: any): void {
    val && this.skillForm.setValue(val);
  }

  registerOnChange(fn: any): void {
    this.skillForm.valueChanges.subscribe(() => {
      fn(this.skillForm.value);
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  validate(): ValidationErrors | null {
    return this.skillForm.valid
      ? null
      : { subformerror: 'Problems in subform!' };
  }

  get titleFormControl(): AbstractControl {
    return this.skillForm.controls['title'];
  }
}
