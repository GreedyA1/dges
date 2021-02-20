import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SkillsEntity, SkillsFacade } from '@dges/store/skills/firebase';
import { ToolsEntity, ToolsFacade } from '@dges/store/tools/firebase';
import { Observable } from 'rxjs';
import { AddSkillComponent } from '../add-skill/add-skill.component';
import { AddToolsComponent } from '../add-tools/add-tools.component';

@Component({
  selector: 'dges-skills-control-panel',
  templateUrl: './skills-control-panel.component.html',
  styleUrls: ['./skills-control-panel.component.scss'],
})
export class SkillsControlPanelComponent implements OnInit {
  public skills$: Observable<SkillsEntity[]>;
  public tools$: Observable<ToolsEntity[]>;
  public loadingSkills$: Observable<boolean>;
  public loadingTools$: Observable<boolean>;

  constructor(
    public dialog: MatDialog,
    @Inject('SkillsFacade') private skillsFacade: SkillsFacade,
    @Inject('ToolsFacade') private toolsFacade: ToolsFacade
  ) {}

  ngOnInit(): void {
    this.skills$ = this.skillsFacade.allSkills$;
    this.tools$ = this.toolsFacade.allTools$;
    this.skillsFacade.init();
    this.toolsFacade.init();
    this.loadingSkills$ = this.skillsFacade.loaded$;
    this.loadingTools$ = this.toolsFacade.loaded$;
  }

  addSkill(): void {
    this.dialog.open(AddSkillComponent, {
      panelClass: 'full-screen-dialog',
    });
  }

  addTools(): void {
    this.dialog.open(AddToolsComponent, {
      panelClass: 'full-screen-dialog',
    });
  }
}
