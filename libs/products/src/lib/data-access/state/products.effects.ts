import { inject, Injectable } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";

import { getCategory, categoryActionsSuccess } from './products.actions'


@Injectable()
export class ProductsEffects {
  #productsService = inject(ProductsService);
  #actions = inject(Actions);


  loadCategories = createEffect(() => this.#actions.pipe(
    ofType(getCategory),
    exhaustMap(() => this.#productsService.getCategories().pipe(
      map((categories: string[]) =>
        categoryActionsSuccess({ categories })
      ),
      catchError(() => EMPTY)
    ))
  ))
}
