import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../../models";
import { AUTH_FEATURE_KEY } from "./auth.reducers";

export const selectAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectUsername = createSelector(
  selectAuthState,
  (state) => state.username
)

export const selectUserEmail = createSelector(
  selectAuthState,
  (state) => state.email
)
