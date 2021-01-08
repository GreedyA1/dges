import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsReducers } from '@dges/store/projects/projects-firebase';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      ProjectsReducers.projectsFeatureKey,
      environment.projectsReducer
    ),
    EffectsModule.forFeature([environment.projectsEffect]),
  ],
})
export class ProjectCardsModule {}
