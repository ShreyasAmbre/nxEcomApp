import { AppState } from "./app.state";


export const selectAppState = (state: AppState) => state;

export const selectCategories = (state: AppState) => state.categories
export const selectCurrentCategory = (state: AppState) => state.currentCategory
export const selectError = (state: AppState) => state.error
