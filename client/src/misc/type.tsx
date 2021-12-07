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
export type UserType = {
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
  country: string
  address: string
  phone: number
  DOB: Date
  acceptedTerms: boolean
  role: string
}

export type CartType = {
  _id: string
  name: string
  price: number
  imageLink: string
  description: string
  variant: VariantType[]
  quantity: number
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
export const FetchUserById = 'fetchUserById'
export const AddProductToCart = 'addProductToCart'
export const RemoveProductToCart = 'removeProductToCart'
export const AddProductQuantity = 'addProductQuantity'
export const RemoveProductQuantity = 'removeProductQuantity'
export const AddProductRecently = 'addProductRecently'

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

export type FetchUserByIdAction = {
  type: typeof FetchUserById
  payload: {
    userById: UserType
  }
}

export type AddProductToCartAction = {
  type: typeof AddProductToCart
  payload: {
    cart: CartType
  }
}

export type RemoveProductToCartAction = {
  type: typeof RemoveProductToCart
  payload: {
    cart: CartType
  }
}

export type AddProductQuantityAction = {
  type: typeof AddProductQuantity
  payload: {
    productId: string
  }
}

export type RemoveProductQuantityAction = {
  type: typeof RemoveProductQuantity
  payload: {
    productId: string
  }
}

export type AddProductRecentlyAction = {
  type: typeof AddProductRecently
  payload: {
    product: ProductType
  }
}

//combine action
export type AllAction =
  | FetchProductAction
  | FetchProductByIdAction
  | SearchProductAction
  | AddFavoriteAction
  | FetchUserByIdAction
  | AddProductToCartAction
  | RemoveProductToCartAction
  | AddProductQuantityAction
  | RemoveProductQuantityAction
  | AddProductRecentlyAction

//state
export type ProductState = {
  product: ProductType[]
  productById: null | ProductType
  favoriteProduct: ProductType[]
  productRecently: ProductType[]
}

export type UserState = {
  userById: null | UserType
}

export type CartState = {
  cartData: CartType[]
}

export type AppState = {
  productState: ProductState
  userState: UserState
  cartState: CartState
}
