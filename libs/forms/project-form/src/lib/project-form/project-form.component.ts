import { Component, forwardRef, Input } from '@angular/core';
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
import { Skill } from '@dges/types/skill';
import { Observable } from 'rxjs';

@Component({
  selector: 'dges-project-form',
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
export class ProjectFormComponent implements ControlValueAccessor {
  @Input() choiceArray: string[];

  @Input()
  get skills$(): Observable<Skill[]> {
    return this._skills$;
  }
  set skills$(skills: Observable<Skill[]>) {
    this._skills$ = skills;
  }
  _skills$: Observable<Skill[]>;

  @Input()
  get tools$(): Observable<Skill[]> {
    return this._tools$;
  }
  set tools$(tools: Observable<Skill[]>) {
    this._tools$ = tools;
  }
  _tools$: Observable<Skill[]>;

  public isDisabled = false;
  expression =
    '/(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9]' +
    '[a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})/gi';

  public projectForm = new FormGroup({
    id: new FormControl({ value: null, disabled: this.isDisabled }, []),
    title: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    description: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    startDate: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    endDate: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
    ]),
    link: new FormControl({ value: '', disabled: this.isDisabled }, [
      Validators.required,
      // Validators.pattern(this.expression),
    ]),
    tools: new FormControl({ value: [], disabled: this.isDisabled }, [
      Validators.minLength(0),
    ]),
    images: new FormControl({ value: [], disabled: this.isDisabled }, [
      Validators.minLength(0),
    ]),
    skills: new FormControl({ value: [], disabled: this.isDisabled }, [
      Validators.minLength(0),
    ]),
  });

  // Function to call when the input is touched (when a star is clicked).
  onTouched: () => void;

  onBlur() {
    this.onTouched();
  }

  writeValue(val: any): void {
    val && this.projectForm.setValue(val);
  }

  registerOnChange(fn: any): void {
    this.projectForm.valueChanges.subscribe(() => {
      fn(this.projectForm.value);
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  validate(): ValidationErrors | null {
    return this.projectForm.valid
      ? null
      : { subformerror: 'Problems in subform!' };
  }

  // uploadImages(imageURLS: string[]): void{
  //   this.imagesFormControl.setValue(imageURLS);
  // }

  get titleFormControl(): AbstractControl {
    return this.projectForm.controls['title'];
  }

  get descriptionFormControl(): AbstractControl {
    return this.projectForm.controls['description'];
  }

  get startDateFormControl(): AbstractControl {
    return this.projectForm.controls['startDate'];
  }

  get endDateFormControl(): AbstractControl {
    return this.projectForm.controls['endDate'];
  }

  get linkFormControl(): AbstractControl {
    return this.projectForm.controls['link'];
  }

  get toolsFormControl(): AbstractControl {
    return this.projectForm.controls['tools'];
  }

  get imagesFormControl(): AbstractControl {
    return this.projectForm.controls['images'];
  }

  get skillsFormControl(): AbstractControl {
    return this.projectForm.controls['skills'];
  }
}
