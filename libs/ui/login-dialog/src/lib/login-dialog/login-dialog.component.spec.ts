import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginDialogComponent} from './login-dialog.component';
import {MockComponent} from "ng-mocks";
import {LoginFormComponent} from "@dges/forms/login-form";
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogRef} from "@angular/material/dialog";

describe('LoginDialogComponent', () => {
  let component: LoginDialogComponent;
  let fixture: ComponentFixture<LoginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginDialogComponent,
        MockComponent(LoginFormComponent)
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: jest.fn().mockReturnValue({}),
          },
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
