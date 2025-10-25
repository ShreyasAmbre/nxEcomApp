import { provideState } from "@ngrx/store";
import { PRODUCT_FEATURE_KEY, productReducer } from "./state";
import { provideEffects } from "@ngrx/effects";
import { ProductsEffects } from "./state/products.effects";


export const provideProductStore = [
  provideState({ name: PRODUCT_FEATURE_KEY, reducer: productReducer }),
  provideEffects(ProductsEffects)
]
