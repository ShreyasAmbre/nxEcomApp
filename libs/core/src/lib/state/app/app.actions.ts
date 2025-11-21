import { createAction, props } from '@ngrx/store';

export const loadAppConfig = createAction('[App] Load Config');
export const loadAppConfigSuccess = createAction(
  '[App] Load Config Success',
  props<{ config: any }>()
);

export const loadUserSession = createAction('[App] Load User Session');
export const loadUserSessionSuccess = createAction(
  '[App] Load User Session Success',
  props<{ user: any }>()
);
