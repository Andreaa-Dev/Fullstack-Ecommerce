import { Dispatch } from 'redux'
import axios from 'axios'
import { GetOrder, GetOrderAction, OrderType } from '../../misc/type'

export function getOrderSuccess(orderData: OrderType[]): GetOrderAction {
  return {
    type: GetOrder,
    payload: {
      orderData: orderData,
    },
  }
}
