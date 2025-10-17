import { createReducer, on } from '@ngrx/store';
import { categoryActionsSuccess, categoryActionsFailure } from './app.actions';
import { initialState } from './app.state';


export const appReducer = createReducer(
  initialState,
  on(categoryActionsSuccess, (state, action) => {
    return {
      ...state,
      categories: action.categories,
      error: ''
    }
  }),
  on(categoryActionsFailure, (state, action) => {
    return {
      ...state,
      categories: [],
      error: action.error
    }
  })
)


