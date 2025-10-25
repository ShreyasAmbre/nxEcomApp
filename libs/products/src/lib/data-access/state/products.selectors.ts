import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PRODUCT_FEATURE_KEY, ProductState } from "./products.reducer";

export const selectProductsState = createFeatureSelector<ProductState>(PRODUCT_FEATURE_KEY);

export const selectCategories = createSelector(
  selectProductsState,
  (state) => state.categories
)

export const selectError = createSelector(
  selectProductsState,
  (state) => state.error
)

// export const productFeature = createFeature({
//   name: PRODUCT_FEATURE_KEY,
//   reducer: productReducer
// })
