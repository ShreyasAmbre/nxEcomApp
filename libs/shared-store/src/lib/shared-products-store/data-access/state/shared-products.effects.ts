import { inject, Injectable } from "@angular/core";
import { SharedProductsService } from "../services/shared-products.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map, of } from "rxjs";

import { getCategory, categoryActionsSuccess, getAllProducts, getAllProductsSuccess, getProductsBasedonCategorySuccess, getProductsBasedonCategoryFailure, getProductsBasedonCategory } from './shared-products.actions'
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

  loadProducsBasedOnCategory = createEffect(() => this.#actions.pipe(
    ofType(getProductsBasedonCategory),
    exhaustMap(({ categoryName }) => this.#sharedProductsService.getProductFromCategory(categoryName).pipe(
      map((categorizedProducts: Product[]) => getProductsBasedonCategorySuccess({ categorizedProducts }))
    )),
    catchError((error) => of(getProductsBasedonCategoryFailure({ error })))
  ))
}
