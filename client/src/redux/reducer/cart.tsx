import {
  AddProductQuantity,
  AddProductToCart,
  AllAction,
  CartState,
  RemoveProductQuantity,
  RemoveProductToCart,
} from '../../misc/type'

const initialState: CartState = {
  cartData: [],
}

export default function cart(
  state = initialState,
  action: AllAction
): CartState {
  switch (action.type) {
    case AddProductToCart:
      const foundProduct = state.cartData.find((item) => {
        return item._id === action.payload.cart._id
      })
      if (foundProduct) {
        const newProduct = {
          ...foundProduct,
          quantity: foundProduct.quantity + 1,
        }
        const newCartData = [
          ...state.cartData.filter((item) => item._id !== newProduct._id),
          newProduct,
        ]
        return { ...state, cartData: newCartData }
      }
      return { ...state, cartData: [...state.cartData, action.payload.cart] }

    case RemoveProductToCart:
      const foundProductCart = action.payload.cart
      let removedProductCart = state.cartData.filter((item) => {
        return item._id !== foundProductCart._id
      })
      return {
        ...state,
        cartData: removedProductCart,
      }
    case AddProductQuantity:
      const productID = action.payload.productId
      const newCart = state.cartData.map((item) => {
        if (item._id === productID) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })

      return {
        ...state,
        cartData: newCart,
      }

    case RemoveProductQuantity:
      const productId = action.payload.productId
      const updatedCart = state.cartData.map((item) => {
        if (item._id === productId) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
      return {
        ...state,
        cartData: updatedCart,
      }

    default:
      return state
  }
}
