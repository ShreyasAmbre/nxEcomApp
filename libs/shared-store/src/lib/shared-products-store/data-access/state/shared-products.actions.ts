import { createAction, props } from "@ngrx/store";
import { Product } from "../models";


export const getCategory = createAction('[Category] Get Categories');
export const categoryActionsSuccess = createAction(
  '[Category] Get Categories Success',
  // (categories: string[]) => ({ categories }),
  props<{ categories: string[] }>()
)

export const categoryActionsFailure = createAction(
  '[Category] Get Categories Failure',
  // (error: string) => ({ error }),
  props<{ error: string }>()
)

export const getAllProducts = createAction('[Products] Get All Products');
export const getAllProductsSuccess = createAction(
  '[Products] Get All Products Success',
  props<{ products: Product[] }>()
)
export const getAllProductsFailure = createAction(
  '[Products] Get All Products Failure',
  props<{ error: string }>()
)

