import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  private isDisabled = false;

  public projectForm = new FormGroup({
    title: new FormControl({value: '', disabled: this.isDisabled}, [Validators.required]),
    description: new FormControl({value: '', disabled: this.isDisabled}, [Validators.required]),
    date: new FormControl({value: '', disabled: this.isDisabled}, [Validators.required]),
    link: new FormControl({value: '', disabled: this.isDisabled}, []),
    tools: new FormArray([]),
    images: new FormControl([]),
    skills: new FormArray([]),
  })

  constructor() {
    console.log('Yo')
  }

  ngOnInit(): void {
    console.log('Yo')
  }

}
