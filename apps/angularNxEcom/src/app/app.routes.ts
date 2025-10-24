import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@angular-nx-ecom-wp/feature-shell').then((m) => m.featureShellRoutes)
  },
];
