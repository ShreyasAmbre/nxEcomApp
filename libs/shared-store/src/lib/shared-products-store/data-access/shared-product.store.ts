import { provideState } from "@ngrx/store";
import { SHARED_PRODUCT_FEATURE_KEY, sharedProductReducer, SharedProductsEffects } from "./state";
import { provideEffects } from "@ngrx/effects";


export const provideSharedProductStore = [
  provideState(
    {
      name: SHARED_PRODUCT_FEATURE_KEY,
      reducer: sharedProductReducer
    }
  ),
  provideEffects(SharedProductsEffects)
]
