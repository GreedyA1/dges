import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsControlPanelComponent } from './skills-control-panel.component';

describe('SkillsControlPanelComponent', () => {
  let component: SkillsControlPanelComponent;
  let fixture: ComponentFixture<SkillsControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsControlPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
