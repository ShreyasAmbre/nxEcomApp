import { createReducer, on } from "@ngrx/store";
import { categoryActionsFailure, categoryActionsSuccess, getAllProductsFailure, getAllProductsSuccess, getProductsBasedonCategorySuccess } from "./shared-products.actions";
import { SharedProductState } from "../models";

export const SHARED_PRODUCT_FEATURE_KEY = 'shared-product';

const initialSharedProductState: SharedProductState = {
  categories: [],
  products: [],
  categorizedProducts: [],
  currentCategory: '',
  error: ''
}

export const sharedProductReducer = createReducer(
  initialSharedProductState,
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
  }),
  on(getAllProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
      error: ''
    }
  }),
  on(getAllProductsFailure, (state, action) => {
    return {
      ...state,
      products: [],
      error: action.error
    }
  }),
  on(getProductsBasedonCategorySuccess, (state, action) => {
    return {
      ...state,
      categorizedProducts: action.categorizedProducts,
      error: ''
    }
  })
)
