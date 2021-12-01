import { combineReducers } from 'redux'
import product from './product'
import user from './user'
import order from './order'

const createRootReducer = () =>
  combineReducers({
    productState: product,
    userState: user,
    orderState: order,
  })

export default createRootReducer
