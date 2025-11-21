import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

// Define the state interface
export interface AppState {
  config: any | null;
  user: any | null;
  loading: boolean;
}

// Initial state
export const initialState: AppState = {
  config: null,
  user: null,
  loading: false,
};

// Reducer function
export const appReducer = createReducer(
  initialState,

  // Load App Config
  on(AppActions.loadAppConfig, (state) => ({
    ...state,
    loading: true,
  })),
  on(AppActions.loadAppConfigSuccess, (state, { config }) => ({
    ...state,
    config,
    loading: false,
  })),

  // Load User Session
  on(AppActions.loadUserSession, (state) => ({
    ...state,
    loading: true,
  })),
  on(AppActions.loadUserSessionSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  }))
);
