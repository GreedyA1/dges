import { AuthState } from '@dges/store/auth/firebase';

export interface RootState {
  auth: AuthState.AuthState;
}

export const initialRootState: RootState = {
  auth: AuthState.initialAuthState,
};
