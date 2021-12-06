import {
  AddProductQuantity,
  AddProductQuantityAction,
  AddProductToCart,
  AddProductToCartAction,
  CartType,
  RemoveProductQuantity,
  RemoveProductQuantityAction,
  RemoveProductToCart,
  RemoveProductToCartAction,
} from '../../misc/type'

export function addToCart(cart: CartType): AddProductToCartAction {
  return {
    type: AddProductToCart,
    payload: {
      cart: cart,
    },
  }
}

export function removeToCart(cart: CartType): RemoveProductToCartAction {
  return {
    type: RemoveProductToCart,
    payload: {
      cart: cart,
    },
  }
}

export function addProductQuantity(
  productId: string
): AddProductQuantityAction {
  return {
    type: AddProductQuantity,
    payload: {
      productId: productId,
    },
  }
}

export function removeProductQuantity(
  productId: string
): RemoveProductQuantityAction {
  return {
    type: RemoveProductQuantity,
    payload: {
      productId: productId,
    },
  }
}
