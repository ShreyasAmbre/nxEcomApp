import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AppService } from '../services/app.service';
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {
  #appService = inject(AppService);
  #actions = inject(Actions);

  // Example: Load app config on app initialization
  loadAppConfig$ = createEffect(() =>
    this.#actions.pipe(
      ofType(AppActions.loadAppConfig),  // action dispatched
      mergeMap(() =>
        this.#appService.getAppConfig().pipe(
          map(config => AppActions.loadAppConfigSuccess({ config })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // Example: Load current user session
  loadUserSession$ = createEffect(() =>
    this.#actions.pipe(
      ofType(AppActions.loadUserSession),
      mergeMap(() =>
        this.#appService.getUserSession().pipe(
          map(user => AppActions.loadUserSessionSuccess({ user })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
