import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppEffects, appReducer, baseUrlInterceptor, provideCoreStore, setupFontAwesome } from '@angular-nx-ecom-wp/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment';
import { APP_CONFIG, } from '@angular-nx-ecom-wp/shared';
import { provideSharedProductStore } from '@angular-nx-ecom-wp/shared-store';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FontAwesomeModule),
    // {
    //   provide: 'FA_SETUP',
    //   useFactory: setupFontAwesome,
    //   deps: [FaIconLibrary]
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: () => () => setupFontAwesome(inject(FaIconLibrary)),
    //   multi: true
    // },
    provideAppInitializer(() => {
      const library = inject(FaIconLibrary);
      setupFontAwesome(library);
    }),

    provideStore({}),
    ...provideCoreStore,
    ...provideSharedProductStore,
    provideEffects([AppEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(
      withInterceptors([
        baseUrlInterceptor
      ])
    ),
    { provide: APP_CONFIG, useValue: environment },
  ],
};
