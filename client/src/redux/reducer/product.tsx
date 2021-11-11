import { ProductState, AllAction, FetchProduct } from '../../misc/type'

const initialState: ProductState = { product: [] }

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

    default:
      return state
  }
}
