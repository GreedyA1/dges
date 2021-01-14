import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import {
  ControlValueAccessor,
  FormArray,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'dges-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsComponent),
      multi: true,
    },
  ],
})
export class ChipsComponent implements ControlValueAccessor {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  chipCtrl = new FormControl();
  filteredChips: Observable<string[]>;
  @Input() chipCategory: string;
  @Input() allChips: string[] = [
    'Apple',
    'Lemon',
    'Lime',
    'Orange',
    'Strawberry',
  ];

  @ViewChild('chipInput') chipInput: ElementRef<HTMLInputElement>;
  @ViewChild(MatAutocompleteTrigger, { read: MatAutocompleteTrigger })
  inputAutoComplete: MatAutocompleteTrigger;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  chipsControl: FormArray;

  public isDisabled = false;
  // Function to call when the input is touched (when a star is clicked).
  onTouched: () => void;

  writeValue(obj: any): void {
    this.chipsControl = new FormArray([]);
    for (const value of obj) this.chipsControl.push(new FormControl(value));
  }

  registerOnChange(fn: any): void {
    this.chipsControl.valueChanges.subscribe((value) => {
      return fn(value);
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  constructor() {
    this.filteredChips = this.chipCtrl.valueChanges.pipe(
      startWith(null),
      map((chip: string | null) =>
        chip ? this._filter(chip) : this.allChips.slice()
      )
    );
  }

  add(event: MatChipInputEvent): void {
    // const input = event.input;
    // const value = event.value;
    // // Add our chip
    // if ((value || '').trim()) {
    //   this.chips.push(value.trim());
    // }
    // // Reset the input value
    // if (input) {
    //   input.value = '';
    // }
    // this.chipCtrl.setValue(null);
  }

  get chips(): string[] {
    return this.chipsControl.value;
  }

  open(event: Event) {
    event.stopPropagation();
    this.inputAutoComplete.openPanel();
  }

  remove(index: number): void {
    index >= 0 && this.chipsControl.removeAt(index);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.chips.indexOf(event.option.viewValue) >= 0 ||
      this.chipsControl.push(new FormControl(event.option.viewValue));
    this.chipInput.nativeElement.value = '';
    this.chipCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allChips.filter(
      (chip) => chip.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
