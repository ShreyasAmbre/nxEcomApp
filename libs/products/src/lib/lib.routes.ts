import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { provideProductStore } from './data-access/product.store';

export const productsRoutes: Route[] = [
  {
    path: '',
    component: ProductsComponent,
    providers: [...provideProductStore],
  },
];
