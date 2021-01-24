import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsGroupChipsComponent } from './skills-group-chips.component';

describe('SkillsGroupChipsComponent', () => {
  let component: SkillsGroupChipsComponent;
  let fixture: ComponentFixture<SkillsGroupChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsGroupChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsGroupChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
