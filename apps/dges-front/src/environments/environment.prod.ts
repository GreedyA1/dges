import {
  ProjectsEffects,
  ProjectsReducers,
} from '@dges/store/projects/projects-firebase';
import { AuthEffects, AuthReducers } from '@dges/store/auth/firebase';
import { FirebaseUploadFacade } from '@dges/store/storage/firebase';
import { SkillsFacade } from '@dges/store/skills/firebase';

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
  projectsEffect: ProjectsEffects.ProjectsEffects,
  projectsFeatureKey: ProjectsReducers.projectsFeatureKey,
  authReducer: AuthReducers.authReducer,
  authEffect: AuthEffects.AuthEffects,
  authFeatureKey: AuthReducers.authFeatureKey,
  uploadFacade: FirebaseUploadFacade,
  skillsFacade: SkillsFacade,
};
