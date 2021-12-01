import { AllAction, GetOrder, OrderState } from '../../misc/type'

const initialState: OrderState = {
  orderData: [],
}

export default function order(
  state = initialState,
  action: AllAction
): OrderState {
  switch (action.type) {
    case GetOrder:
      return {
        ...state,
        orderData: action.payload.orderData,
      }
    default:
      return state
  }
}
