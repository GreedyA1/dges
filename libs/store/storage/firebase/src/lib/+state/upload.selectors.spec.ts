import { UploadEntity } from './upload.models';
import { State, uploadAdapter, initialState } from './upload.reducer';
import * as UploadSelectors from './upload.selectors';

describe('Upload Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUploadId = (it) => it['id'];
  const createUploadEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UploadEntity);

  let state;

  beforeEach(() => {
    state = {
      upload: uploadAdapter.setAll(
        [
          createUploadEntity('PRODUCT-AAA'),
          createUploadEntity('PRODUCT-BBB'),
          createUploadEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Upload Selectors', () => {
    it('getAllUpload() should return the list of Upload', () => {
      const results = UploadSelectors.getAllUpload(state);
      const selId = getUploadId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = UploadSelectors.getSelected(state);
      const selId = getUploadId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getUploadLoaded() should return the current 'loaded' status", () => {
      const result = UploadSelectors.getUploadLoaded(state);

      expect(result).toBe(true);
    });

    it("getUploadError() should return the current 'error' state", () => {
      const result = UploadSelectors.getUploadError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
