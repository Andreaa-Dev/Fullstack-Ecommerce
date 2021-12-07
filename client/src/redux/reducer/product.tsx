import {
  ProductState,
  AllAction,
  FetchProduct,
  FetchProductById,
  AddFavorite,
  SearchProduct,
  AddProductRecently,
} from '../../misc/type'

const initialState: ProductState = {
  product: [],
  productById: null,
  favoriteProduct: [],
  productRecently: [],
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
      let productId = action.payload.favoriteProduct._id
      let isAdded = state.favoriteProduct.some((item) => {
        return item._id === productId
      })

      let newState = []
      if (isAdded) {
        newState = state.favoriteProduct.filter((item) => {
          return item._id !== productId
        })
      } else {
        newState = [...state.favoriteProduct, action.payload.favoriteProduct]
      }

      return {
        ...state,
        favoriteProduct: newState,
      }

    case SearchProduct:
      return {
        ...state,
        product: action.payload.product,
      }

    case AddProductRecently:
      let productIds = action.payload.product._id
      let isAddedProducts = state.productRecently.some((item) => {
        return item._id === productIds
      })

      let updateProductState = []
      if (isAddedProducts) {
        updateProductState = state.productRecently.filter((item) => {
          return item._id === productIds
        })
      } else {
        updateProductState = [...state.productRecently, action.payload.product]
      }
      return {
        ...state,
        productRecently: updateProductState,
      }
    default:
      return state
  }
}
