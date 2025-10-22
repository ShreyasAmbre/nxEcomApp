import { createSelector } from "@ngrx/store";
import { CategoryState } from "./category.reducer";


export const selectCategoryState = (state: CategoryState) => state;

export const selectCategories = (state: CategoryState) => state.categories
export const selectCurrentCategory = (state: CategoryState) => state.currentCategory
export const selectCurrentError = (state: CategoryState) => state.error
