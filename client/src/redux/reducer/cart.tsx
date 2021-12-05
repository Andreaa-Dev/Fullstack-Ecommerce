import {
  AddProductQuantity,
  AddProductToCart,
  AllAction,
  CartState,
  RemoveProductQuantity,
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
      return {
        ...state,
        cartData: [...state.cartData, action.payload.cart],
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
