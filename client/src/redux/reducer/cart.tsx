import { isTemplateExpression } from 'typescript'
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
      let result = state.cartData.map((item) => {
        if (item._id === action.payload.cart._id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      return {
        ...state,
        cartData: [...result, action.payload.cart],
      }

    case RemoveProductToCart:
      const productRemoved = action.payload.cart
      let removedProductCart = state.cartData.filter((item) => {
        if (item !== productRemoved) {
          return { ...item }
        }
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
