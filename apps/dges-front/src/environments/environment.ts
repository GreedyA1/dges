// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthEffects, AuthReducers } from '@dges/store/auth/firebase';
import { FirebaseUploadFacade } from '@dges/store/storage/firebase';
import { SkillsFacade } from '@dges/store/skills/firebase';
import { ToolsFacade } from '@dges/store/tools/firebase';
import { JobsFacade } from '@dges/store/jobs/firebase';
import { EducationFacade } from '@dges/store/education/firebase';
import { ProjectsFacade } from '@dges/store/projects/firebase';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAB3yJSPHHhOwPBa4buvNl4DT0TjR28X2I',
    authDomain: 'dges-ed94f.firebaseapp.com',
    databaseURL: 'https://dges-ed94f.firebaseio.com',
    projectId: 'dges-ed94f',
    storageBucket: 'dges-ed94f.appspot.com',
    messagingSenderId: '1038181456176',
    appId: '1:1038181456176:web:689079ec60a04d665d90f5',
    measurementId: 'G-3MHENET84P',
  },
  authReducer: AuthReducers.authReducer,
  authEffect: AuthEffects.AuthEffects,
  authFeatureKey: AuthReducers.authFeatureKey,
  uploadFacade: FirebaseUploadFacade,
  jobsFacade: JobsFacade,
  skillsFacade: SkillsFacade,
  toolsFacade: ToolsFacade,
  projectsFacade: ProjectsFacade,
  educationFacade: EducationFacade,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
