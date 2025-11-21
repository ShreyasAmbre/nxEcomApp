import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../../models";
import { signUpFailure, signUpSuccess } from "./auth.actions";

export const AUTH_FEATURE_KEY = 'auth';

const initialAuthState: AuthState = {
  userId: 0,
  username: "",
  password: "",
  email: "",
  token: "",
  authError: "",
  error: "",
}

export const authReducer = createReducer(
  initialAuthState,
  on(signUpSuccess, (state, action) => {
    return {
      ...state,
      userId: action.response.id,
      username: action.response.username,
      password: action.response.password,
      email: action.response.email,
      error: ''
    }
  }),
  on(signUpFailure, (state, action) => {
    return {
      ...state,
      userId: 0,
      username: "",
      password: "",
      error: action.error
    }
  })
)
