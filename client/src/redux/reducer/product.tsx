import {
  ProductState,
  AllAction,
  FetchProduct,
  FetchProductById,
  AddFavorite,
} from '../../misc/type'

const initialState: ProductState = {
  product: [],
  productById: null,
  favoriteProduct: [],
}

export default function product(
  state = initialState,
  action: AllAction
): ProductState {
  switch (action.type) {
    case FetchProduct:
      return {
        ...state,
        product: action.payload.product,
      }
    case FetchProductById:
      return {
        ...state,
        productById: action.payload.product,
      }

    case AddFavorite:
      return {
        ...state,
        // favoriteProduct: action.payload.favoriteProduct,
      }
    default:
      return state
  }
}
