import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

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
  ],
})
export class ProjectFormComponent implements OnInit, ControlValueAccessor {
  
  public isDisabled = false;
  private readonly URL_REGEXP = '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})';

  // Function to call when the input is touched (when a star is clicked).
  onTouched: () => void;

  onChanged: any;

  writeValue(obj: any): void {
    this.projectForm.setValue(obj);

    this.projectForm.valueChanges.subscribe((res) => {
      if (this.onChanged) this.onChanged(this.projectForm.value);
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
  
  public projectForm = new FormGroup({
    title: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    description: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    startDate: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
      Validators.pattern(this.URL_REGEXP)
    ]),
    endDate: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
      Validators.pattern(this.URL_REGEXP)
    ]),
    link: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
      Validators.pattern(this.URL_REGEXP)
    ]),
    tools: new FormControl([], [
      Validators.minLength(1),
    ]),
    images: new FormControl([], [
      Validators.required,
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


  constructor() {
    console.log('');
  }

  ngOnInit(): void {
    console.log('');
  }
}
