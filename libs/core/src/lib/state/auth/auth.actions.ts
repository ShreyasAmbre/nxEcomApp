import { createAction, props } from "@ngrx/store";
import { SignUpRequest, SignUpResponse } from "../../models";


export const signUp = createAction(
  '[Auth] SignUp',
  props<{ request: SignUpRequest }>()
)
export const signUpSuccess = createAction(
  '[Auth] Sign Up Success',
  props<{ response: SignUpResponse }>()
)
export const signUpFailure = createAction(
  '[Auth] Sign Up Failure',
    props<{ error: string }>()
)
