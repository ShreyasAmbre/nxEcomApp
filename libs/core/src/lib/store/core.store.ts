import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appReducer } from '../state/app/app.reducer';
import { AppEffects } from '../state/app/app.effects';
import { AUTH_FEATURE_KEY, authReducer } from '../state/auth/auth.reducers';
import { AuthEffects } from '../state/auth/auth.effects';

export const provideCoreStore = [
  provideState(
    {
      name: 'app',
      reducer: appReducer
    }
  ),
  provideEffects(AppEffects),

  provideState(
    {
      name: AUTH_FEATURE_KEY,
      reducer: authReducer
    }
  ),
  provideEffects(AuthEffects)
];
