import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../services";
import { signUp, signUpFailure, signUpSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { SignUpResponse } from "../../models";


@Injectable()
export class AuthEffects {
  #authService = inject(AuthService);
  #actions = inject(Actions);


  createAccount = createEffect(() => this.#actions.pipe(
    ofType(signUp),
    exhaustMap(({ request }) => this.#authService.createUserAccount(request).pipe(
      map((response: SignUpResponse) => signUpSuccess({ response }))
    )),
    catchError((error) => of(signUpFailure({ error })))
  ))
}
