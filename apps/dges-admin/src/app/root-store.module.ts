import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreStorageFirebaseModule } from '@dges/store/storage/firebase';
import { StoreSkillsFirebaseModule } from '@dges/store/skills/firebase';
import { StoreToolsFirebaseModule } from '@dges/store/tools/firebase';
import { StoreJobsFirebaseModule } from '@dges/store/jobs/firebase';
import { StoreEducationFirebaseModule } from '@dges/store/education/firebase';
import { StoreProjectsFirebaseModule } from '@dges/store/projects/firebase';
import { StoreAuthFirebaseModule } from '@dges/store/auth/firebase';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreStorageFirebaseModule,
    StoreSkillsFirebaseModule,
    StoreToolsFirebaseModule,
    StoreJobsFirebaseModule,
    StoreProjectsFirebaseModule,
    StoreEducationFirebaseModule,
    StoreAuthFirebaseModule,
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
