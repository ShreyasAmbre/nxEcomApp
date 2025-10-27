import { createReducer, on } from "@ngrx/store";
import { categoryActionsFailure, categoryActionsSuccess } from "./shared-products.actions";
import { SharedProductState } from "../models";

export const PRODUCT_FEATURE_KEY = 'product';

const initialSharedProductState: SharedProductState = {
  categories: [],
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
  })
)
