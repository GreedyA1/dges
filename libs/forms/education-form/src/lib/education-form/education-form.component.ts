import { Component, ElementRef, forwardRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  FormArray,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';


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

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  public educationForm = new FormGroup({
    id: new FormControl({ value: null, disabled: this.isDisabled }, []),
    title: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    major: new FormControl({ value: '', disabled: this.isDisabled }, [
      // Validators.required,
    ]),
    minor: new FormControl({ value: '', disabled: this.isDisabled }, [
      // Validators.required,
    ]),
    educationLevel: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    description: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    courses: new FormArray([]),
    startDate: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    endDate: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    image: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.minLength(0),
    ]),
  });

  // Function to call when the input is touched (when a star is clicked).
  onTouched: () => void;

  onBlur() {
    this.onTouched();
  }

  writeValue(val: any): void {
    val && this.educationForm.setValue(val);
  }

  registerOnChange(fn: any): void {
    this.educationForm.valueChanges.subscribe(() => {
      fn(this.educationForm.value);
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  validate(): ValidationErrors | null {
    return this.educationForm.valid
      ? null
      : { subformerror: 'Problems in subform!' };
  }

  // uploadImages(imageURLS: string[]): void{
  //   this.imagesFormControl.setValue(imageURLS);
  // }

  get titleFormControl(): AbstractControl {
    return this.educationForm.controls['title'];
  }

  get descriptionFormControl(): AbstractControl {
    return this.educationForm.controls['description'];
  }

  get startDateFormControl(): AbstractControl {
    return this.educationForm.controls['startDate'];
  }

  get endDateFormControl(): AbstractControl {
    return this.educationForm.controls['endDate'];
  }

  get linkFormControl(): AbstractControl {
    return this.educationForm.controls['link'];
  }

  get toolsFormControl(): AbstractControl {
    return this.educationForm.controls['tools'];
  }

  get imagesFormControl(): AbstractControl {
    return this.educationForm.controls['images'];
  }

  get skillsFormControl(): AbstractControl {
    return this.educationForm.controls['skills'];
  }

  get coursesFormControl(): FormArray {
    return this.educationForm.controls['courses'] as FormArray;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {

      this.coursesFormControl.push(new FormControl(value.trim()));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(index: number): void {
    index >= 0 && this.coursesFormControl.removeAt(index);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}
