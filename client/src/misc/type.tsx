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

export type OrderType = {
  quantity: number
  date: Date
  userId: string
  productId: string
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
export const GetOrder = 'getOrder'

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

export type GetOrderAction = {
  type: typeof GetOrder
  payload: {
    orderData: OrderType
  }
}

//combine action
export type AllAction =
  | FetchProductAction
  | FetchProductByIdAction
  | SearchProductAction
  | AddFavoriteAction
  | FetchUserByIdAction
  | GetOrderAction

//state
export type ProductState = {
  product: ProductType[]
  productById: null | ProductType
  favoriteProduct: ProductType[]
}

export type UserState = {
  userById: null | UserType
}

export type OrderState = {
  orderData: OrderType[]
}

export type AppState = {
  productState: ProductState
  userState: UserState
  orderState: OrderState
}
