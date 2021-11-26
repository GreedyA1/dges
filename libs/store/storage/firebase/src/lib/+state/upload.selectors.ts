import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  UPLOAD_FEATURE_KEY,
  State,
  UploadPartialState,
  uploadAdapter,
} from './upload.reducer';

// Lookup the 'Upload' feature state managed by NgRx
export const getUploadState = createFeatureSelector< State>(
  UPLOAD_FEATURE_KEY
);

const { selectAll, selectEntities } = uploadAdapter.getSelectors();

export const getUploadLoaded = createSelector(
  getUploadState,
  (state: State) => state.loaded
);

export const getUploadError = createSelector(
  getUploadState,
  (state: State) => state.error
);

export const getAllUpload = createSelector(getUploadState, (state: State) =>
  selectAll(state)
);

export const getUploadEntities = createSelector(
  getUploadState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getUploadState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getUploadEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
