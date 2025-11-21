import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const productsRoutes: Route[] = [
  {
    path: 'all-products',
    loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'categorized-product/:categoryName',
    loadComponent: () => import('./categorized-products/categorized-products.component').then(m => m.CategorizedProductsComponent)
  },
  {
    path: '',
    redirectTo: 'all-products',
    pathMatch: 'full'
  }
];
