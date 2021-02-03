import { Component, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'dges-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EducationFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EducationFormComponent),
      multi: true,
    },
  ],
})
export class EducationFormComponent implements ControlValueAccessor  {

  public isDisabled = false;
  expression =
    '/(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9]' +
    '[a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})/gi';

  public jobForm = new FormGroup({
    id: new FormControl({ value: null, disabled: this.isDisabled }, []),
    title: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    major: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    minor: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    educationLevel: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    description: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    courses: new FormControl({ value: [], disabled: this.isDisabled }, [
      Validators.minLength(0),
    ]),
    startDate: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    endDate: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    images: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.minLength(0),
    ]),
  });

  // Function to call when the input is touched (when a star is clicked).
  onTouched: () => void;

  onBlur() {
    this.onTouched();
  }

  writeValue(val: any): void {
    val && this.jobForm.setValue(val);
  }

  registerOnChange(fn: any): void {
    this.jobForm.valueChanges.subscribe(() => {
      fn(this.jobForm.value);
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  validate(): ValidationErrors | null {
    return this.jobForm.valid
      ? null
      : { subformerror: 'Problems in subform!' };
  }

  // uploadImages(imageURLS: string[]): void{
  //   this.imagesFormControl.setValue(imageURLS);
  // }

  get titleFormControl(): AbstractControl {
    return this.jobForm.controls['title'];
  }

  get descriptionFormControl(): AbstractControl {
    return this.jobForm.controls['description'];
  }

  get startDateFormControl(): AbstractControl {
    return this.jobForm.controls['startDate'];
  }

  get endDateFormControl(): AbstractControl {
    return this.jobForm.controls['endDate'];
  }

  get linkFormControl(): AbstractControl {
    return this.jobForm.controls['link'];
  }

  get toolsFormControl(): AbstractControl {
    return this.jobForm.controls['tools'];
  }

  get imagesFormControl(): AbstractControl {
    return this.jobForm.controls['images'];
  }

  get skillsFormControl(): AbstractControl {
    return this.jobForm.controls['skills'];
  }

}
