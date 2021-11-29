export type VariantType = {
  hexValue: string
  colourName: string
}

export type ProductType = {
  _id: string
  name: string
  price: number
  imageLink: string
  description: string
  variant: VariantType[]
}

export type UserInput = {
  userInput: string
}

//Action types

export const FetchProduct = 'fetchProduct'
export const FetchProductById = 'fetchProductById'

export const AddProduct = 'addProduct'
export const RemoveProduct = 'removeProduct'

export const SearchProduct = 'searchProduct'

export const AddFavorite = 'addFavorite'
export const RemoveFavorite = 'removeFavorite'

export type FetchProductAction = {
  type: typeof FetchProduct
  payload: {
    product: ProductType[]
  }
}

export type FetchProductByIdAction = {
  type: typeof FetchProductById
  payload: {
    product: ProductType
  }
}

export type SearchProductAction = {
  type: typeof SearchProduct
  payload: {
    product: ProductType[]
  }
}

export type AddFavoriteAction = {
  type: typeof AddFavorite
  payload: {
    favoriteProduct: ProductType
  }
}

//combine action
export type AllAction =
  | FetchProductAction
  | FetchProductByIdAction
  | SearchProductAction
  | AddFavoriteAction

//state
export type ProductState = {
  product: ProductType[]
  productById: null | ProductType
  favoriteProduct: ProductType[]
}

export type AppState = {
  productState: ProductState
}
