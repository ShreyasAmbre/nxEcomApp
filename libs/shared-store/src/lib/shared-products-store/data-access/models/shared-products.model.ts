export interface SharedProductState {
  categories: string[],
  products: Product[],
  currentCategory: string,
  error: string
}

export interface Category {
  categories: string[]
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  ratings: Ratings
}

interface Ratings {
  count: number,
  rate: number
}
