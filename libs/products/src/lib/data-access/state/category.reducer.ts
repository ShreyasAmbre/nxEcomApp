import { createReducer, on } from "@ngrx/store";
import { categoryActionsFailure, categoryActionsSuccess } from "./category.actions";

export interface CategoryState {
  categories: string[],
  currentCategory: string,
  error: string
}

const initialCategoryState: CategoryState = {
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
