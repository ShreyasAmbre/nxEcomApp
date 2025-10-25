import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

// Feature selector for the 'app' slice
export const selectAppState = createFeatureSelector<AppState>('app');

// Select specific pieces of state
export const selectAppConfig = createSelector(
  selectAppState,
  (state) => state.config
);

export const selectUser = createSelector(
  selectAppState,
  (state) => state.user
);

export const selectLoading = createSelector(
  selectAppState,
  (state) => state.loading
);
