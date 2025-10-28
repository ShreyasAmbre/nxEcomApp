import { provideState } from "@ngrx/store";
import { SHARED_PRODUCT_FEATURE_KEY, sharedProductReducer } from "./state";
import { provideEffects } from "@ngrx/effects";
import { SharedProductsEffects } from "./state/shared-products.effects";


export const provideSharedProductStore = [
  provideState({ name: SHARED_PRODUCT_FEATURE_KEY, reducer: sharedProductReducer }),
  provideEffects(SharedProductsEffects)
]
