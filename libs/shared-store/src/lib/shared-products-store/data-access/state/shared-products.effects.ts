import { inject, Injectable } from "@angular/core";
import { SharedProductsService } from "../services/shared-products.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";

import { getCategory, categoryActionsSuccess, getAllProducts, getAllProductsSuccess } from './shared-products.actions'
import { Product } from "../models";


@Injectable()
export class SharedProductsEffects {
  #sharedProductsService = inject(SharedProductsService);
  #actions = inject(Actions);


  loadCategories = createEffect(() => this.#actions.pipe(
    ofType(getCategory),
    exhaustMap(() => this.#sharedProductsService.getCategories().pipe(
      map((categories: string[]) =>
        categoryActionsSuccess({ categories })
      ),
      catchError(() => EMPTY)
    ))
  ))


  loadAllProducts = createEffect(() => this.#actions.pipe(
    ofType(getAllProducts),
    exhaustMap(() => this.#sharedProductsService.getAllProducts().pipe(
      map((products: Product[]) =>
        getAllProductsSuccess({ products })
      ),
      catchError(() => EMPTY)
    ))
  ))
}
