import { UploadEntity } from './upload.models';
import * as UploadActions from './upload.actions';
import { State, initialState, reducer } from './upload.reducer';

describe('Upload Reducer', () => {
  const createUploadEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UploadEntity);

  beforeEach(() => {});

  describe('valid Upload actions', () => {
    it('loadUploadSuccess should return set the list of known Upload', () => {
      const upload = [
        createUploadEntity('PRODUCT-AAA'),
        createUploadEntity('PRODUCT-zzz'),
      ];
      const action = UploadActions.loadUploadSuccess({ upload });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
