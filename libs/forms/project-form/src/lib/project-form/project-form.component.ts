import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProjectFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ProjectFormComponent),
      multi: true,
    },
  ],
})
export class ProjectFormComponent implements OnInit, ControlValueAccessor {

  @Input() choiceArray: string[];
  
  public isDisabled = false;
  expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

  constructor(
    ) {}

  ngOnInit(): void {
    this.projectForm.valueChanges.subscribe((res) => {
      if (this.onChanged) this.onChanged(this.projectForm.value);
    });
  }

  // Function to call when the input is touched (when a star is clicked).
  onTouched: () => void;

  onChanged: any;

  writeValue(val: any): void {
    val && this.projectForm.patchValue(val);
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

  validate(c: AbstractControl): ValidationErrors | null {
    return this.projectForm.valid ? null : {subformerror: 'Problems in subform!'};
  }
  
  public projectForm = new FormGroup({
    id: new FormControl({ value: null, disabled: this.isDisabled }, []), 
    title: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    description: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    startDate: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required
    ]),
    endDate: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required
    ]),
    link: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
      Validators.pattern(this.expression)
    ]),
    tools: new FormControl([], [
      Validators.minLength(1),
    ]),
    images: new FormControl([], [
    ]),
    skills: new FormControl([], [
      Validators.minLength(1),
    ]),
  });

  get titleFormControl() {
    return this.projectForm.controls['title'];
  }

  get descriptionFormControl() {
    return this.projectForm.controls['description'];
  }

  get startDateFormControl() {
    return this.projectForm.controls['startDate'];
  }

  get endDateFormControl() {
    return this.projectForm.controls['endDate'];
  }

  get linkFormControl() {
    return this.projectForm.controls['link'];
  }

  get toolsFormControl() {
    return this.projectForm.controls['tools'];
  }

  get imagesFormControl() {
    return this.projectForm.controls['images'];
  }

  get skillsFormControl() {
    return this.projectForm.controls['skills'];
  }
}
