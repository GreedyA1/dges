import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardsModule } from './project-cards/project-cards.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProjectCardsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
  ],
})
export class ProjectsRootStateModule {}
