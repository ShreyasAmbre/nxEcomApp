import { Route } from '@angular/router';
import { FeatureShellComponent } from './feature-shell/feature-shell.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const featureShellRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: "auth",
        loadChildren: () => import('@angular-nx-ecom-wp/feature-auth').then(m => m.featureAuthRoutes)
      },
      {
        path: 'home',
        loadChildren: () => import('@angular-nx-ecom-wp/home').then(m => m.homeRoutes)
      },
      {
        path: 'products',
        loadChildren: () => import('@angular-nx-ecom-wp/products').then(m => m.productsRoutes)
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      }
    ]
  },
];
