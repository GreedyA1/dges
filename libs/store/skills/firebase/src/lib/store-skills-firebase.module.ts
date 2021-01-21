import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSkills from './+state/skills.reducer';
import { SkillsEffects } from './+state/skills.effects';
import { SkillsFacade } from './+state/skills.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSkills.SKILLS_FEATURE_KEY, fromSkills.reducer),
    EffectsModule.forFeature([SkillsEffects]),
  ],
  providers: [SkillsFacade],
})
export class StoreSkillsFirebaseModule {}
