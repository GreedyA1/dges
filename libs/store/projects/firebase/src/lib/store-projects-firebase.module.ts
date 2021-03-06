import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProjects from './+state/projects.reducer';
import { ProjectsEffects } from './+state/projects.effects';
import { ProjectsFacade } from './+state/projects.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromProjects.PROJECTS_FEATURE_KEY,
      fromProjects.reducer
    ),
    EffectsModule.forFeature([ProjectsEffects]),
  ],
  providers: [ProjectsFacade],
})
export class StoreProjectsFirebaseModule {}
