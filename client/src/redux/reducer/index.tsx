import { combineReducers } from 'redux'
import product from './product'

const createRootReducer = () =>
  combineReducers({
    productState: product,
  })

export default createRootReducer
