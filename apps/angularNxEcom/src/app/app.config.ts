import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppEffects, appReducer, baseUrlInterceptor } from '@angular-nx-ecom-wp/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment';
import { APP_CONFIG, } from '@angular-nx-ecom-wp/shared';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(
      withInterceptors([
        baseUrlInterceptor
      ])
    ),
    provideStore({ app: appReducer }),
    provideEffects([]),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    { provide: APP_CONFIG, useValue: environment },
  ],
};
