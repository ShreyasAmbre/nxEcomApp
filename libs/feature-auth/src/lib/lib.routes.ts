import { Route } from '@angular/router';
import { FeatureAuthComponent } from './feature-auth/feature-auth.component';

export const featureAuthRoutes: Route[] = [
  {
    path: '',
    component: FeatureAuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./sign-up/sign-up.component').then(m => m.SignUpComponent)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },
];
