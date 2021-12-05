import { combineReducers } from 'redux'
import product from './product'
import user from './user'
import cart from './cart'

const createRootReducer = () =>
  combineReducers({
    productState: product,
    userState: user,
    cartState: cart,
  })

export default createRootReducer
