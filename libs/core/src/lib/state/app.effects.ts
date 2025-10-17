import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { setAppLoaded } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  logAppLoaded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setAppLoaded),
        tap(action => console.log('App Loaded Action:', action))
      ),
    { dispatch: false }
  );
}
