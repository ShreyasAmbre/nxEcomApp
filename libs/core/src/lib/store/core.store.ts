import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appReducer } from '../state/app.reducer';
import { AppEffects } from '../state/app.effects';

export const provideCoreStore = [
  provideState({ name: 'app', reducer: appReducer }),
  provideEffects(AppEffects),
];
