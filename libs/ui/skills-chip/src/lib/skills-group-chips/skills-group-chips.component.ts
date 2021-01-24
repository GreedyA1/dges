import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from '@dges/types/skill';

@Component({
  selector: 'dges-skills-group-chips',
  templateUrl: './skills-group-chips.component.html',
  styleUrls: ['./skills-group-chips.component.scss'],
})
export class SkillsGroupChipsComponent {
  @Input() skills: Skill[];
  @Input() showDelete: boolean;
  @Output() delete = new EventEmitter<Skill>();

  deleteSkill(skill: Skill): void {
    this.delete.emit(skill);
  }
}
