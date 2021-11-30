import { combineReducers } from 'redux'
import product from './product'
import user from './user'

const createRootReducer = () =>
  combineReducers({
    productState: product,
    userState: user,
  })

export default createRootReducer
