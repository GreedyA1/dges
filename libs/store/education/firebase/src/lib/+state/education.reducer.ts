import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as EducationActions from './education.actions';
import { EducationEntity } from './education.models';

export const EDUCATION_FEATURE_KEY = 'education';

export interface State extends EntityState<EducationEntity> {
  selectedId?: string | number; // which Education record has been selected
  loaded: boolean; // has the Education list been loaded
  error?: string | null; // last known error (if any)
}

export interface EducationPartialState {
  readonly [EDUCATION_FEATURE_KEY]: State;
}

export const educationAdapter: EntityAdapter<EducationEntity> = createEntityAdapter<
  EducationEntity
>();

export const initialState: State = educationAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const educationReducer = createReducer(
  initialState,
  on(EducationActions.loadEducation, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(EducationActions.loadEducationSuccess, (state, { education }) =>
    educationAdapter.setAll(education, { ...state, loaded: true })
  ),
  on(EducationActions.loadEducationFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return educationReducer(state, action);
}
