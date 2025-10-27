import { provideState } from "@ngrx/store";
import { PRODUCT_FEATURE_KEY, sharedProductReducer } from "./state";
import { provideEffects } from "@ngrx/effects";
import { SharedProductsEffects } from "./state/shared-products.effects";


export const provideSharedProductStore = [
  provideState({ name: PRODUCT_FEATURE_KEY, reducer: sharedProductReducer }),
  provideEffects(SharedProductsEffects)
]
