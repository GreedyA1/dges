import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MockComponent} from "ng-mocks";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginFormComponent,
        MockComponent(MatLabel),
        MockComponent(MatError),
        MockComponent(MatHint),
        MockComponent(MatFormField),
      ],
      imports: [
        MatInputModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
