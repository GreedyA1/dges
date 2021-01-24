import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProjectCardsModule } from './project-cards/project-cards.module';
import { AuthModule } from './auth/auth.module';
import { StoreStorageFirebaseModule } from '@dges/store/storage/firebase';
import { StoreSkillsFirebaseModule } from '@dges/store/skills/firebase';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProjectCardsModule,
    AuthModule,
    StoreStorageFirebaseModule,
    StoreSkillsFirebaseModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
  ],
})
export class RootStoreModule {}