import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SHARED_PRODUCT_FEATURE_KEY } from "./shared-products.reducer";
import { SharedProductState } from "../../models";

export const selectSharedProductsState = createFeatureSelector<SharedProductState>(SHARED_PRODUCT_FEATURE_KEY);

export const selectCategories = createSelector(
  selectSharedProductsState,
  (state) => state.categories
)

export const selectError = createSelector(
  selectSharedProductsState,
  (state) => state.error
)

export const selectAllProducts = createSelector(
  selectSharedProductsState,
  (state) => state.products
)

export const selectCategorizedProducts = createSelector(
  selectSharedProductsState,
  (state) => state.categorizedProducts
)
