import { createReducer, on } from "@ngrx/store";
import { categoryActionsFailure, categoryActionsSuccess } from "./products.actions";

export const PRODUCT_FEATURE_KEY = 'product';
export interface ProductState {
  categories: string[],
  currentCategory: string,
  error: string
}

const initialCategoryState: ProductState = {
  categories: [],
  currentCategory: '',
  error: ''
}

export const productReducer = createReducer(
  initialCategoryState,
  on(categoryActionsSuccess, (state, action) => {
    return {
      ...state,
      categories: action.categories,
      error: ''
    }
  }),
  on(categoryActionsFailure, (state, action) => {
    return {
      ...state,
      categories: [],
      error: action.error
    }
  })
)
