import { provideState } from "@ngrx/store";
import { productReducer } from "./state";
import { provideEffects } from "@ngrx/effects";
import { ProductsEffects } from "./state/products.effects";


export const provideProductStore = [
  provideState({ name: 'product', reducer: productReducer }),
  provideEffects(ProductsEffects)
]
