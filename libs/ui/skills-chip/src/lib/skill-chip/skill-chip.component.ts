import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from '@dges/types/skill';

@Component({
  selector: 'dges-skill-chip',
  templateUrl: './skill-chip.component.html',
  styleUrls: ['./skill-chip.component.scss'],
})
export class SkillChipComponent {
  @Input() skill: Skill;
  @Input() showDelete: boolean;
  @Output() delete = new EventEmitter<Skill>();

  onDelete(): void {
    this.delete.emit(this.skill);
  }
}
