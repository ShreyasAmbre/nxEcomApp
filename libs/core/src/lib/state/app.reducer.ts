import { createReducer, on } from '@ngrx/store';
import { setAppLoaded } from './app.actions';

export interface AppCoreState {
  loaded: boolean;
}

export const initialState: AppCoreState = {
  loaded: false,
};

export const appReducer = createReducer(
  initialState,
  on(setAppLoaded, (state, { loaded }) => ({ ...state, loaded }))
);
