import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLengthMenuComponent } from './full-length-menu.component';

describe('FullLengthMenuComponent', () => {
  let component: FullLengthMenuComponent;
  let fixture: ComponentFixture<FullLengthMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullLengthMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLengthMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
