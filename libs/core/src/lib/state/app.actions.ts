import { createAction, props } from '@ngrx/store';

export const setAppLoaded = createAction(
  '[App] Set Loaded',
  props<{ loaded: boolean }>()
);
