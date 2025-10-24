import { createAction, props } from "@ngrx/store";


export const getCategory = createAction('[Category] Get Categories');

export const categoryActionsSuccess = createAction(
  '[Category] Get Categories Success',
  // (categories: string[]) => ({ categories }),
  props<{ categories: string[] }>()
)

export const categoryActionsFailure = createAction(
  '[Category] Get Categories Failure',
  // (error: string) => ({ error }),
  props<{ error: string }>()
)
