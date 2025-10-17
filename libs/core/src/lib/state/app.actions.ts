import { createAction, props } from '@ngrx/store';

export const categoriesActions = createAction('[Category] Get Categories');

export const categoryActionsSuccess = createAction(
  '[Category] Get Category Success',
  (categories: string[]) => ({categories})
);

export const categoryActionsFailure = createAction(
  '[Category] Get Categories Failure',
  (error: string) => ({ error })
)
