import { User } from '@dges/types/auth';

export interface AuthState {
  loading: boolean;
  loaded: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  loading: false,
  loaded: false,
  user: null,
};
