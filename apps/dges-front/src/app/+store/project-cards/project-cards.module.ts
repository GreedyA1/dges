import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      environment.projectsFeatureKey,
      environment.projectsReducer
    ),
    EffectsModule.forFeature([environment.projectsEffect]),
  ],
})
export class ProjectCardsModule {}
