import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponent } from 'ng-mocks';

import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatNavList } from '@angular/material/list';

import { RouterTestingModule } from '@angular/router/testing';
import {MatDialog} from "@angular/material/dialog";
import {of} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";

describe('AppComponent', () => {
  beforeEach(async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(MatToolbar),
        MockComponent(MatButton),
        MockComponent(MatIcon),
        MockComponent(MatSidenav),
        MockComponent(MatSidenavContainer),
        MockComponent(MatSidenavContent),
        MockComponent(MatNavList),
      ],
      providers:[
        {
          provide: MatDialog,
          useValue: {
            open: jest.fn().mockReturnValue({}),
          },
        },
        {
          provide: AngularFireAuth,
          useValue: {
            signOut: jest.fn().mockReturnValue(of()),
            signInWithEmailAndPassword: jest.fn().mockReturnValue(of()),
          },
        }
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dges-front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dges-front');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('dges-front');
  });
});
