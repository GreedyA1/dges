import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillChipComponent } from './skill-chip/skill-chip.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SkillsGroupChipsComponent } from './skills-group-chips/skills-group-chips.component';

@NgModule({
  imports: [CommonModule, MatTooltipModule],
  declarations: [SkillChipComponent, SkillsGroupChipsComponent],
  exports: [SkillChipComponent, SkillsGroupChipsComponent],
})
export class UiSkillsChipModule {}
