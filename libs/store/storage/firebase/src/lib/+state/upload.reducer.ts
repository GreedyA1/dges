import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as UploadActions from './upload.actions';
import { UploadEntity } from './upload.models';

export const UPLOAD_FEATURE_KEY = 'upload';

export interface State extends EntityState<UploadEntity> {
  selectedId?: string | number; // which Upload record has been selected
  loaded: boolean; // has the Upload list been loaded
  error?: string | null; // last known error (if any)
}

export interface UploadPartialState {
  readonly [UPLOAD_FEATURE_KEY]: State;
}

export const uploadAdapter: EntityAdapter<UploadEntity> = createEntityAdapter<
  UploadEntity
>();

export const initialState: State = uploadAdapter.getInitialState({
  // set initial required properties
  entities: [{ id: '123123' }],
  loaded: false,
});

const uploadReducer = createReducer(
  initialState,
  on(UploadActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(UploadActions.loadUploadSuccess, (state, { upload }) => {
    console.log('yooo', upload);
    return uploadAdapter.setAll(upload, { ...state, loaded: true });
  }),
  on(UploadActions.loadUploadFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(UploadActions.cleanUploads, (state) => {
    return uploadAdapter.removeAll({ ...state, loaded: true });
  })
);

export function reducer(state: State | undefined, action: Action) {
  return uploadReducer(state, action);
}
