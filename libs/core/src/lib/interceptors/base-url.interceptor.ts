import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { APP_CONFIG } from '@angular-nx-ecom-wp/shared';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const appConfig = inject(APP_CONFIG);

  if (req.url) {
    req = req.clone({
      url: `${appConfig.baseUrl}${req.url}`
    })
  }

  return next(req);
};
