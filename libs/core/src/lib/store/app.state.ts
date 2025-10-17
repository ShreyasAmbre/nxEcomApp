export interface AppState {
  categories: string[],
  currentCategory: string,
  error: string
}


export const initialState: AppState = {
  categories: [],
  currentCategory: '',
  error: ''
}
