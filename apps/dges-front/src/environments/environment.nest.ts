// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {ProjectsEffects, ProjectsReducers} from "@dges/store/projects/projects-firebase";

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
  projectsReducer: ProjectsReducers.projectsReducer,
  projectsEffect: ProjectsEffects.ProjectsEffects
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
